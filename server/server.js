const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Testing App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Vincent',
            age: 25
        },
        {
            name: 'Anita',
            age: 22
        }
    ])
})

app.listen(3000, () => console.log('Server started on port 3000'));

module.exports.app = app;