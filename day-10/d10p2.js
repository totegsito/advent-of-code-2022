// Personal data set
const inputCase = `addx 2
addx 3
addx -2
addx 3
noop
addx 6
addx -1
addx 4
addx 1
noop
addx 3
addx 1
addx 7
noop
noop
addx -1
addx 3
addx 2
noop
addx 4
addx 2
addx -25
addx -7
addx -4
addx 2
addx 2
addx 19
addx -8
addx -5
addx 2
addx -9
addx 16
addx 3
addx -2
addx 12
addx -5
addx 2
addx -15
noop
noop
noop
addx 5
addx 16
addx -22
addx -14
addx 5
noop
addx 29
noop
noop
noop
addx -21
addx 2
noop
noop
addx 5
addx -1
addx 1
noop
noop
addx 8
addx -2
addx 4
noop
addx -22
addx 29
noop
addx -36
noop
addx -2
addx 6
addx -2
addx 2
noop
noop
noop
addx 8
addx 2
addx 10
noop
addx -5
addx 3
addx -2
addx 9
addx -2
addx 2
addx -21
addx 10
addx 17
addx -38
noop
noop
noop
addx 34
addx -27
addx 2
addx -6
addx 7
addx 5
addx 2
addx 5
noop
noop
noop
addx 3
addx -2
addx 2
addx 5
addx 2
addx -29
addx 35
addx -3
addx -25
addx -8
addx 1
noop
addx 4
addx 3
addx -2
addx 5
noop
addx 8
addx -6
noop
addx -3
addx 10
noop
noop
addx 6
addx -1
addx -18
addx 21
addx -30
addx 37
addx 1
noop
noop
noop
noop`

// Provided test case
const testCase = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`

const addXRegex = /^addx (?<amount>-?\d+)$/;

// This can vary
const parseInput = (input) => input.split('\n').reduce((acc, curr) => {
    if (addXRegex.test(curr)) {
        const { groups: { amount } } = curr.match(addXRegex);
        return [...acc, 0, parseInt(amount, 10)];
    }
    return [...acc, 0];
}, []);

// Solution
const resolve = (input) => {
    const {output} = input.reduce((acc, curr, idx) => {
        const x = Math.floor(idx / 40);
        const crt = idx % 40;
        if ([crt -1, crt, crt + 1].includes(acc.register)) {
            return { register: acc.register + curr, output: {...acc.output, [x]: acc.output[x] + '#'}};
        }
        const register = acc.register + curr;
        return {register, output: {...acc.output, [x]: acc.output[x] + '.'}};
    }, {register: 1, signalStrength: 0, output: {0: '', 1: '', 2: '', 3: '', 4: '', 5: ''}});
    return Object.keys(output).reduce((acc, curr) => acc + output[curr] + '\n', '');
};


const parsedTest = parseInput(testCase);
const test = resolve(parsedTest);


const testReference = `##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....
`;

console.log(test)
console.log(testReference)
console.assert(test === testReference, 'Test case failed');

const parsedInput = parseInput(inputCase);
const output = resolve(parsedInput);

console.log(`${output}`);
