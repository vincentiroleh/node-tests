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
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum: number) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(5, (result: number) => {
        expect(result).toBe(25).toBeA('number');
        done();
    });    
});
