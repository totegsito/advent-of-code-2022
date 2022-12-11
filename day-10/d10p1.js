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
const resolve = (input) => input.reduce((acc, curr, idx) => {
    if ([20, 60, 100, 140, 180, 220].includes(idx + 1)) {
        const signalStrength = acc.register * (idx + 1);
        return { register: acc.register + curr, signalStrength: acc.signalStrength + signalStrength };
    }
    const register = acc.register + curr;
    return { register, signalStrength: acc.signalStrength };
}, { register: 1, signalStrength: 0}).signalStrength;


const parsedTest = parseInput(testCase);
console.log({ cycles: parsedTest.length});
const test = resolve(parsedTest);


console.log('Test solutions: ', test)
console.assert(test === 13140, 'Test case failed');

const parsedInput = parseInput(inputCase);
const output = resolve(parsedInput);

console.log(`The solution is ${output}`);
