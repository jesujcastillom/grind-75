const operators = new Map([
    ['*', (a, b) => a * b],
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['/', (a, b) => {
        const val = Math.trunc(a / b);
        if (val == -0) return 0;
        return val;
    }]
])
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(let i = 0; i < tokens.length; i++) {
        const token = tokens[i]
        if (operators.has(token)) {
            const operands = stack.splice(-2, 2)
            stack.push(operators.get(token)(...operands))
            continue;
        }
        stack.push(Number(tokens[i]))
    }
    return stack.pop()
};

function evaluateOperation(operation, ...operands) {
    const [a, b] = operands.map(Number);
    return operation(a, b);
}
