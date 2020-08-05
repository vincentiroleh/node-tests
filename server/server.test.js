const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

it('should return object of error and name!', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.',
                name: 'Testing App v1.0'
            })
        })
        .end(done);
});

it('should return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toBeA('object').toInclude({
                name: 'Vincent',
                age: 25,
                name: 'Anita',
                age: 22
            })
        })
        .end(done);
});
