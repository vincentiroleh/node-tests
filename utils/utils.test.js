var expect = require('expect');
var utils = require('./utils');
describe('Utils', function () {
    describe('#add', function () {
        it('should add two numbers', function () {
            var result = utils.add(33, 11);
            expect(result).toBe(44).toBeA('number');
        });
    });
    describe('#square', function () {
        it('should square a number', function () {
            var result = utils.square(5);
            expect(result).toBe(25).toBeA('number');
        });
    });
    describe('#async-functions', function () {
        it('should async add two numbers', function (done) {
            utils.asyncAdd(4, 3, function (sum) {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
        it('should async square a number', function (done) {
            utils.asyncSquare(5, function (result) {
                expect(result).toBe(25).toBeA('number');
                done();
            });
        });
    });
    describe('#playground', function () {
        it('should expect some values', function () {
            expect(12).toNotBe(11);
            expect({ name: 'Vincent' }).toEqual({ name: 'Vincent' });
            expect({ name: 'Iroleh' }).toNotEqual({ name: 'Vincent' });
            expect([2, 3, 4, 5]).toInclude(5);
            expect([2, 3, 4, 5]).toExclude(1);
            expect({
                name: 'Vincent',
                age: 25,
                location: 'Nigeria'
            }).toInclude({
                age: 25
            });
        });
        it('should set firstName and lastName', function () {
            var user = {
                age: 25,
                location: 'Nigeria'
            };
            var result = utils.setName(user, 'Vincent Iroleh');
            expect(result).toInclude({ firstName: 'Vincent', lastName: 'Iroleh' }).toBeA('object');
        });
    });
});
