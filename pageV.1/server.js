const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    try {
        const count = readFileSync('./count.txt', 'utf-8');
        console.log('count: ', count)

        const newCount = parseInt(count) + 1

        writeFileSync('./count.txt', newCount.toString());

        res.sendFile(path.join(__dirname, './index.html'));
    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => console.log('http://localhost:5000/'));