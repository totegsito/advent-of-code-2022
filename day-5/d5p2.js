// Personal data set
const inputCase = `[Q] [J]                         [H]
[G] [S] [Q]     [Z]             [P]
[P] [F] [M]     [F]     [F]     [S]
[R] [R] [P] [F] [V]     [D]     [L]
[L] [W] [W] [D] [W] [S] [V]     [G]
[C] [H] [H] [T] [D] [L] [M] [B] [B]
[T] [Q] [B] [S] [L] [C] [B] [J] [N]
[F] [N] [F] [V] [Q] [Z] [Z] [T] [Q]
 1   2   3   4   5   6   7   8   9 

move 1 from 8 to 1
move 1 from 6 to 1
move 3 from 7 to 4
move 3 from 2 to 9
move 11 from 9 to 3
move 1 from 6 to 9
move 15 from 3 to 9
move 5 from 2 to 3
move 3 from 7 to 5
move 6 from 9 to 3
move 6 from 1 to 6
move 2 from 3 to 7
move 5 from 4 to 5
move 7 from 9 to 4
move 2 from 9 to 5
move 10 from 4 to 2
move 6 from 5 to 4
move 2 from 7 to 6
move 10 from 2 to 3
move 21 from 3 to 5
move 1 from 3 to 6
move 3 from 6 to 9
move 1 from 8 to 9
move 5 from 4 to 5
move 4 from 9 to 3
move 17 from 5 to 1
move 1 from 6 to 2
move 16 from 5 to 1
move 3 from 3 to 6
move 6 from 6 to 4
move 1 from 2 to 4
move 4 from 1 to 2
move 2 from 6 to 2
move 28 from 1 to 3
move 1 from 9 to 7
move 1 from 8 to 7
move 1 from 5 to 4
move 1 from 2 to 6
move 1 from 3 to 1
move 3 from 2 to 5
move 1 from 6 to 3
move 4 from 4 to 7
move 5 from 5 to 2
move 1 from 5 to 6
move 6 from 1 to 3
move 1 from 6 to 2
move 26 from 3 to 6
move 2 from 7 to 9
move 4 from 7 to 3
move 19 from 6 to 3
move 6 from 2 to 4
move 5 from 3 to 2
move 1 from 9 to 7
move 26 from 3 to 8
move 6 from 4 to 3
move 1 from 3 to 8
move 1 from 6 to 7
move 6 from 3 to 6
move 6 from 6 to 4
move 1 from 9 to 2
move 2 from 4 to 9
move 22 from 8 to 2
move 2 from 6 to 5
move 1 from 9 to 1
move 1 from 6 to 5
move 1 from 7 to 5
move 3 from 6 to 7
move 2 from 6 to 1
move 1 from 1 to 5
move 3 from 5 to 9
move 4 from 8 to 4
move 2 from 1 to 4
move 18 from 2 to 1
move 2 from 7 to 8
move 3 from 9 to 5
move 8 from 1 to 9
move 5 from 9 to 3
move 1 from 9 to 8
move 2 from 9 to 4
move 2 from 7 to 8
move 5 from 5 to 7
move 1 from 9 to 3
move 4 from 8 to 4
move 1 from 7 to 8
move 4 from 4 to 3
move 2 from 8 to 3
move 1 from 8 to 9
move 2 from 1 to 8
move 3 from 4 to 5
move 1 from 8 to 4
move 1 from 9 to 3
move 1 from 8 to 5
move 8 from 1 to 8
move 11 from 2 to 9
move 12 from 3 to 5
move 1 from 3 to 9
move 1 from 8 to 5
move 11 from 9 to 3
move 4 from 5 to 9
move 3 from 8 to 7
move 3 from 7 to 8
move 1 from 5 to 8
move 7 from 4 to 3
move 1 from 4 to 5
move 1 from 2 to 8
move 3 from 7 to 6
move 3 from 4 to 8
move 1 from 7 to 9
move 2 from 4 to 7
move 5 from 8 to 1
move 3 from 6 to 5
move 2 from 4 to 2
move 1 from 9 to 4
move 1 from 8 to 6
move 1 from 2 to 9
move 1 from 8 to 5
move 3 from 8 to 4
move 3 from 4 to 2
move 4 from 3 to 9
move 17 from 5 to 9
move 9 from 9 to 6
move 1 from 9 to 3
move 5 from 6 to 3
move 3 from 6 to 3
move 8 from 9 to 5
move 2 from 8 to 5
move 1 from 4 to 8
move 1 from 5 to 3
move 1 from 8 to 5
move 3 from 2 to 6
move 3 from 1 to 4
move 7 from 5 to 1
move 1 from 2 to 6
move 13 from 3 to 6
move 2 from 7 to 8
move 13 from 6 to 5
move 3 from 5 to 7
move 6 from 5 to 6
move 1 from 7 to 6
move 2 from 7 to 3
move 1 from 6 to 8
move 13 from 3 to 5
move 9 from 5 to 9
move 7 from 5 to 7
move 17 from 9 to 2
move 3 from 4 to 7
move 9 from 2 to 9
move 10 from 9 to 3
move 8 from 7 to 8
move 2 from 5 to 3
move 4 from 2 to 6
move 11 from 3 to 9
move 9 from 6 to 5
move 5 from 9 to 8
move 1 from 3 to 1
move 3 from 9 to 1
move 2 from 5 to 2
move 1 from 7 to 9
move 2 from 9 to 4
move 2 from 9 to 8
move 13 from 1 to 8
move 3 from 8 to 5
move 27 from 8 to 1
move 10 from 5 to 9
move 1 from 7 to 2
move 2 from 4 to 3
move 10 from 9 to 6
move 1 from 8 to 7
move 15 from 1 to 9
move 13 from 9 to 5
move 15 from 5 to 7
move 5 from 1 to 3
move 8 from 7 to 1
move 7 from 7 to 1
move 16 from 1 to 8
move 4 from 3 to 9
move 4 from 1 to 7
move 4 from 9 to 6
move 5 from 2 to 7
move 15 from 8 to 6
move 1 from 9 to 1
move 3 from 3 to 4
move 1 from 9 to 7
move 1 from 2 to 7
move 1 from 2 to 7
move 1 from 8 to 1
move 3 from 4 to 8
move 3 from 8 to 1
move 8 from 6 to 8
move 7 from 1 to 4
move 11 from 6 to 8
move 14 from 6 to 5
move 13 from 8 to 7
move 4 from 7 to 5
move 15 from 7 to 4
move 6 from 5 to 4
move 2 from 5 to 9
move 1 from 5 to 2
move 3 from 8 to 5
move 19 from 4 to 7
move 10 from 5 to 8
move 2 from 6 to 8
move 1 from 4 to 8
move 2 from 7 to 9
move 9 from 7 to 4
move 6 from 4 to 6
move 11 from 4 to 8
move 2 from 5 to 4
move 5 from 6 to 4
move 1 from 6 to 7
move 3 from 9 to 5
move 3 from 8 to 5
move 3 from 7 to 6
move 11 from 8 to 7
move 1 from 9 to 5
move 1 from 6 to 8
move 1 from 2 to 1
move 5 from 4 to 9
move 2 from 4 to 1
move 2 from 1 to 4
move 1 from 1 to 9
move 4 from 5 to 1
move 1 from 4 to 6
move 17 from 7 to 5
move 9 from 8 to 7
move 6 from 9 to 7
move 3 from 1 to 9
move 12 from 7 to 9
move 12 from 9 to 5
move 5 from 7 to 9
move 17 from 5 to 3
move 7 from 3 to 1
move 5 from 1 to 5
move 5 from 9 to 2
move 4 from 3 to 5
move 1 from 4 to 8
move 5 from 2 to 1
move 22 from 5 to 9
move 3 from 7 to 6
move 6 from 6 to 9
move 2 from 5 to 4
move 1 from 6 to 3
move 2 from 4 to 1
move 3 from 8 to 2
move 1 from 3 to 4
move 24 from 9 to 1
move 4 from 3 to 9
move 2 from 2 to 9
move 2 from 3 to 1
move 1 from 8 to 6
move 1 from 6 to 9
move 1 from 8 to 9
move 2 from 7 to 4
move 1 from 8 to 3
move 1 from 4 to 7
move 3 from 9 to 8
move 1 from 2 to 1
move 9 from 9 to 3
move 1 from 8 to 7
move 1 from 4 to 3
move 2 from 9 to 7
move 1 from 9 to 3
move 2 from 8 to 4
move 12 from 3 to 8
move 2 from 1 to 7
move 1 from 4 to 3
move 30 from 1 to 5
move 6 from 5 to 7
move 12 from 7 to 2
move 1 from 3 to 4
move 2 from 1 to 3
move 1 from 4 to 9
move 10 from 5 to 7
move 10 from 2 to 6
move 8 from 8 to 3
move 3 from 1 to 3
move 5 from 6 to 3
move 2 from 8 to 5
move 1 from 9 to 2
move 2 from 8 to 6
move 4 from 7 to 2
move 3 from 2 to 7
move 2 from 7 to 5
move 1 from 4 to 9
move 11 from 3 to 1
move 7 from 6 to 9
move 3 from 2 to 3
move 10 from 1 to 7
move 14 from 7 to 5
move 3 from 7 to 6
move 5 from 9 to 7
move 29 from 5 to 7
move 6 from 3 to 9
move 2 from 9 to 7
move 15 from 7 to 5
move 11 from 5 to 6
move 5 from 9 to 5
move 10 from 5 to 8
move 1 from 2 to 4
move 1 from 8 to 2
move 2 from 4 to 3
move 2 from 5 to 9
move 8 from 8 to 9
move 11 from 9 to 3
move 1 from 1 to 8
move 18 from 7 to 3
move 1 from 9 to 3
move 28 from 3 to 5
move 12 from 6 to 7
move 1 from 2 to 9
move 15 from 7 to 2
move 1 from 8 to 1
move 10 from 2 to 9
move 10 from 5 to 3
move 2 from 2 to 3
move 18 from 3 to 4
move 6 from 9 to 4
move 1 from 1 to 7
move 1 from 6 to 4
move 1 from 8 to 2
move 1 from 9 to 4
move 2 from 9 to 4
move 19 from 4 to 3
move 1 from 7 to 9
move 1 from 9 to 7
move 1 from 6 to 8
move 3 from 2 to 8
move 2 from 9 to 5
move 15 from 3 to 1
move 7 from 5 to 1
move 3 from 4 to 9
move 1 from 7 to 2
move 3 from 3 to 1
move 6 from 5 to 2
move 3 from 3 to 9
move 4 from 9 to 2
move 5 from 5 to 3
move 1 from 3 to 5
move 3 from 5 to 7
move 3 from 8 to 5
move 1 from 7 to 5
move 4 from 5 to 1
move 4 from 4 to 2
move 2 from 7 to 8
move 12 from 1 to 6
move 1 from 8 to 6
move 6 from 2 to 3
move 9 from 3 to 8
move 1 from 3 to 4
move 3 from 6 to 1
move 2 from 9 to 2
move 1 from 4 to 5
move 2 from 8 to 3
move 10 from 2 to 1
move 2 from 4 to 7
move 12 from 1 to 4
move 1 from 5 to 1
move 7 from 4 to 9
move 2 from 3 to 2
move 6 from 9 to 2
move 1 from 9 to 1
move 1 from 7 to 8
move 5 from 6 to 7
move 3 from 6 to 1
move 6 from 2 to 3
move 2 from 4 to 3
move 1 from 6 to 8
move 1 from 6 to 7
move 8 from 3 to 9
move 2 from 4 to 5
move 3 from 2 to 4
move 10 from 8 to 2
move 22 from 1 to 9
move 9 from 2 to 4
move 1 from 1 to 3
move 1 from 3 to 2
move 3 from 2 to 4
move 2 from 7 to 1
move 14 from 4 to 2
move 2 from 1 to 8
move 2 from 4 to 5
move 4 from 7 to 8
move 24 from 9 to 6
move 3 from 5 to 9
move 1 from 9 to 8
move 1 from 5 to 2
move 1 from 6 to 7
move 6 from 9 to 1
move 1 from 7 to 3
move 5 from 8 to 6
move 9 from 6 to 3
move 4 from 1 to 4
move 2 from 1 to 2
move 11 from 6 to 3
move 13 from 3 to 2
move 2 from 9 to 8
move 8 from 3 to 8
move 2 from 8 to 5
move 1 from 7 to 5
move 3 from 6 to 3
move 11 from 8 to 5
move 13 from 2 to 4
move 10 from 5 to 2
move 2 from 3 to 4
move 2 from 5 to 7
move 15 from 4 to 9
move 2 from 7 to 4
move 2 from 4 to 2
move 2 from 4 to 9
move 2 from 4 to 2
move 1 from 3 to 8
move 1 from 8 to 1
move 1 from 1 to 2
move 1 from 6 to 3
move 7 from 2 to 4
move 1 from 5 to 3
move 7 from 9 to 1
move 7 from 1 to 2
move 4 from 6 to 9
move 12 from 9 to 7
move 6 from 7 to 5
move 1 from 3 to 5
move 7 from 4 to 7
move 3 from 7 to 8
move 3 from 8 to 6
move 18 from 2 to 9
move 7 from 2 to 3
move 15 from 9 to 4
move 3 from 3 to 9
move 1 from 3 to 1
move 3 from 5 to 4
move 1 from 1 to 2
move 1 from 9 to 2
move 2 from 6 to 2
move 5 from 7 to 6
move 5 from 2 to 7
move 3 from 3 to 4
move 5 from 5 to 3
move 6 from 7 to 4
move 9 from 4 to 2
move 18 from 4 to 9
move 6 from 2 to 1
move 1 from 1 to 9
move 4 from 7 to 4
move 7 from 2 to 4
move 1 from 2 to 8
move 1 from 4 to 2
move 4 from 3 to 4
move 16 from 9 to 5
move 9 from 9 to 8
move 1 from 9 to 7
move 4 from 1 to 2
move 2 from 5 to 4
move 10 from 5 to 4
move 4 from 2 to 1
move 5 from 1 to 2
move 1 from 8 to 5
move 1 from 6 to 5
move 4 from 8 to 5
move 2 from 6 to 9
move 3 from 6 to 2
move 2 from 9 to 1
move 1 from 7 to 6
move 1 from 3 to 8
move 9 from 5 to 9
move 4 from 8 to 1
move 2 from 8 to 2
move 1 from 5 to 7
move 9 from 9 to 8
move 1 from 7 to 5
move 9 from 8 to 2
move 6 from 1 to 6
move 6 from 2 to 6
move 10 from 2 to 5
move 5 from 2 to 1
move 1 from 3 to 5
move 8 from 5 to 4
move 5 from 1 to 3
move 10 from 6 to 8
move 3 from 6 to 9
move 4 from 3 to 1
move 5 from 8 to 2
move 4 from 5 to 9
move 1 from 3 to 7
move 1 from 7 to 3
move 1 from 8 to 6
move 1 from 6 to 1
move 15 from 4 to 8
move 5 from 9 to 2
move 1 from 9 to 1
move 1 from 1 to 3
move 6 from 4 to 8
move 12 from 8 to 7
move 1 from 3 to 5
move 3 from 1 to 9
move 13 from 4 to 9
move 5 from 7 to 2
move 1 from 5 to 4
move 8 from 9 to 5
move 6 from 2 to 5
move 2 from 5 to 6`

// Provided test case
const testCase = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`


const rowRegex = /\[[A-Z]\]\s+/
const crateRegex = /(?<crate>[ ]{4}|\[[A-Z]])/g
const crateIdRegex = /\[([A-Z])]/
const columnsRegex = /(\d+)\s+/
const movementRegex = /move (?<crates>\d+) from (?<source>\d+) to (?<target>\d+)/



// This can vary
const parseInput = (input) => input.split('\n').reduce((acc,row) => {
    if (rowRegex.test(row)) {
        const m = row.match(crateRegex)
        for(let i = 0; i < m.length; i++) {
            if (crateIdRegex.test(m[i])) {
                const characterToIntroduce = m[i].match(crateIdRegex)[1];
                if (!acc.plan[i]) {
                    acc.plan[i] = [characterToIntroduce];
                } else {
                    acc.plan[i].unshift(characterToIntroduce);
                }
            }
        }

    }
    if (movementRegex.test(row)) {
        const { groups } = row.match(movementRegex)
        return {...acc, movements: [...acc.movements, groups]}
    }

    return acc;
}, { plan: {}, movements: []});

// Solution
const resolve = (input) => {
    const finalState = input.movements.reduce((acc, curr, idx) => {
        const source = curr.source - 1;
        const target = curr.target - 1;
        const crates = []
        for (let i = 0; i < curr.crates; i++) {
            const crate = input.plan[source].pop();
            crates.unshift(crate)
        }
        input.plan[target].push(...crates);
        return input;
    }, {})
    return Object.keys(finalState.plan).reduce((acc, curr) => {
        const current = finalState.plan[curr]
        if (current.length === 0) {
            return acc
        }
        return [...acc, current[current.length - 1]];
    }, []).join('');
}

const parsedTest = parseInput(testCase);
const test = resolve(parsedTest);

console.assert(test === 'MCD', 'Test case failed');

const parsedInput = parseInput(inputCase);
const output = resolve(parsedInput);

console.log(`The solution is ${output}`);
