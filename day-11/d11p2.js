// Personal data set
const inputCase = `Monkey 0:
  Starting items: 91, 58, 52, 69, 95, 54
  Operation: new = old * 13
  Test: divisible by 7
    If true: throw to monkey 1
    If false: throw to monkey 5

Monkey 1:
  Starting items: 80, 80, 97, 84
  Operation: new = old * old
  Test: divisible by 3
    If true: throw to monkey 3
    If false: throw to monkey 5

Monkey 2:
  Starting items: 86, 92, 71
  Operation: new = old + 7
  Test: divisible by 2
    If true: throw to monkey 0
    If false: throw to monkey 4

Monkey 3:
  Starting items: 96, 90, 99, 76, 79, 85, 98, 61
  Operation: new = old + 4
  Test: divisible by 11
    If true: throw to monkey 7
    If false: throw to monkey 6

Monkey 4:
  Starting items: 60, 83, 68, 64, 73
  Operation: new = old * 19
  Test: divisible by 17
    If true: throw to monkey 1
    If false: throw to monkey 0

Monkey 5:
  Starting items: 96, 52, 52, 94, 76, 51, 57
  Operation: new = old + 3
  Test: divisible by 5
    If true: throw to monkey 7
    If false: throw to monkey 3

Monkey 6:
  Starting items: 75
  Operation: new = old + 5
  Test: divisible by 13
    If true: throw to monkey 4
    If false: throw to monkey 2

Monkey 7:
  Starting items: 83, 75
  Operation: new = old + 1
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 6`

// Provided test case
const testCase = `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`

const monkeyRegex = /Monkey (?<monkeyId>\d+):/;
const itemsRegex = /Starting items: (?<items>[\d, ]+)/;
const operationRegex = /Operation: new = old (?<operator>[+*]) (?<operation>.+)/;
const divisorRegex = /Test: divisible by (?<divisor>\d+)/;
const conditionRegex = /If (?<value>.+): throw to monkey (?<next>\d)/

// This can vary
const parseInput = (input) => input.split('\n').reduce((acc, curr) => {
    const { currentMonkey } = acc;
    if (monkeyRegex.test(curr)) {
        const { groups: { monkeyId } } = curr.match(monkeyRegex);
        return { ...acc, [monkeyId]: { inspections: 0 }, currentMonkey: parseInt(monkeyId) };
    }
    if (itemsRegex.test(curr)) {
        const { groups: { items } } = curr.match(itemsRegex);
        return {...acc, [currentMonkey]: {...acc[currentMonkey], items: items.split(', ').map(el => parseInt(el), 10) } };
    }
    if (operationRegex.test(curr)) {
        const { groups: { operator, operation } } = curr.match(operationRegex);
        return { ...acc, [currentMonkey]: {...acc[currentMonkey], operator, operation } };
    }
    if (divisorRegex.test(curr)) {
        const { groups: { divisor } } = curr.match(divisorRegex);
        return { ...acc, [currentMonkey]: {...acc[currentMonkey], divisor } };
    }
    if (conditionRegex.test(curr)) {
        const { groups: { value, next } } = curr.match(conditionRegex);
        return { ...acc, [currentMonkey]: {...acc[currentMonkey], conditions: {...acc[currentMonkey]?.conditions, [value]: next} } };
    }
    return acc
}, {});

const operationDictionary = {
    '+': (op1, op2) => op1 + op2,
    '*': (op1, op2) => op1 * op2
};

const calculateOperation = ({ operator1, op, operator2 }) => {
    const operation = operationDictionary[op]
    if (operator2 === 'old') {
        return operation(parseInt(operator1), parseInt(operator1));
    }
    return operation(parseInt(operator1), parseInt(operator2));
}

// Solution
const resolve = (input) => {
    const { currentMonkey, ...monkeyKeys } = input
    const monkeys = Object.keys(monkeyKeys)
    const mod = monkeys.reduce((acc, curr) => acc * input[curr].divisor, 1);
    for(let i = 0; i < 10000; i++) {
        if ([1, 20, 100, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].includes(i + 1)) {
            console.log(`Round ${i + 1}`)
        }
        for(const monkey of monkeys) {
            const { items, operator, operation, divisor, conditions } = input[monkey];
            input[monkey].inspections += items.length
            for(const item of items) {
                const worryLevel = calculateOperation({ operator1: item, op: operator, operator2: operation });
                const calculatedWorryLevel = Math.floor(worryLevel % mod)
                const condition = (calculatedWorryLevel % divisor) === 0;
                const next = conditions[condition.toString()];
                input[next].items.push(calculatedWorryLevel)
            }
            if ([1, 20, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].includes(i + 1)) {
                console.log(`Monkey ${monkey} inspected items ${input[monkey].inspections} times`)
            }
            input[monkey].items = [];
        }
    }
    const [max, max2] = monkeys.map(el => input[el].inspections).sort((a,b) => b - a);
    return max * max2
}

const parsedTest = parseInput(testCase);
const test = resolve(parsedTest);


console.log('Test solutions: ', test)
console.assert(test === 10605, 'Test case failed');

const parsedInput = parseInput(inputCase);
const output = resolve(parsedInput);

console.log(`The solution is ${output}`);
