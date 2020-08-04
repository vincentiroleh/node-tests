const utils = require('./utils');

it('should add two numbers', () => {
    const result = utils.add(33, 11);
    if (result !== 44) throw new Error(`Expected 44, but got ${result}.`)
});

it('should square a number', () => {
    const result = utils.square(5);
    if (result !== 25) throw new Error(`Expected 25, but got ${result}.`)
});