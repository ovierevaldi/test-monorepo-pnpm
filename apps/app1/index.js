const express = require('express');
const jwtProvider = require('../../packages/lib1');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send(jwtProvider.sign({payload: 'test'}));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});