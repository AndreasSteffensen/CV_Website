const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const path = require('path');
const app = express();

const imageUrl = '/Profilbillede.jpg';
function getTimestamp()
{
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return timestamp = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

app.get('/', (req, res) => {
    try {
        const count = readFileSync('./count.txt', 'utf-8');
        console.log('count: ', count)
        console.log('Time: ', getTimestamp())
        const newCount = parseInt(count) + 1

        writeFileSync('./count.txt', newCount.toString());

        res.sendFile(path.join(__dirname, './index.html'));
    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get(imageUrl, (req, res) => {
    res.sendFile(path.join(__dirname, './Profilbillede.jpg'));
});

app.listen(5000, () => console.log('Server is running visit https://andreasgnsteffensen.com'));