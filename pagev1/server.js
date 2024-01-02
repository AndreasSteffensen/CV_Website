const fs = require('fs');

const express = require('express');
const path = require('path');
const app = express();

const outputLog = fs.createWriteStream('/home/steff/CV_Website/pagev1/outputLog.log');
const errorsLog = fs.createWriteStream('/home/steff/CV_Website/pagev1/errorsLog.log');
const consoler = new console.Console(outputLog, errorsLog);

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
        const count = readFileSync('/home/steff/CV_Website/pagev1/count.txt', 'utf-8');
        consoler.log('count: ', count);
        consoler.log('Time: ', getTimestamp());
        const newCount = parseInt(count) + 1

        writeFileSync('/home/steff/CV_Website/pagev1/count.txt', newCount.toString());

        res.sendFile(path.join(__dirname, './index.html'));
    }
    catch (error) {
        consoler.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get(imageUrl, (req, res) => {
    res.sendFile(path.join(__dirname, 'home/steff/CV_Website/pagev1/Profilbillede.jpg'));
});

app.listen(5000, () => console.log('Server is running visit https://andreasgnsteffensen.com'));
