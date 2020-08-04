const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    const result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
});

it('should square a number', () => {
    const result = utils.square(5);
    expect(result).toBe(25).toBeA('number');
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({ name: 'Vincent' }).toEqual({ name: 'Vincent' })
    expect({ name: 'Iroleh' }).toNotEqual({ name: 'Vincent' })
    expect([2, 3, 4, 5]).toInclude(5);
    expect([2, 3, 4, 5]).toExclude(1);
    expect({
        name: 'Vincent',
        age: 25,
        location: 'Nigeria'
    }).toInclude({
        age: 25
    })
});

it('should set firstName and lastName', () => {
    const user = {
        age: 25,
        location: 'Nigeria'
    };

    const result = utils.setName(user, 'Vincent Iroleh');
    expect(result).toInclude({ firstName: 'Vincent', lastName: 'Iroleh' }).toBeA('object');

})