const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 80; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { first_name, last_name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'steffensen12@hotmail.com',
            pass: 'Jan120110'
        }
    });

    const mailOptions = {
        from: 'steffensen12@hotmail.com',
        to: 'steffensen12@hotmail.com',
        subject: 'New Contact Form Submission',
        text: 'First Name: ${ first_name }' +
            'Last Name: ${ last_name }' +
            'Email: ${ email }' +
            'Phone Number: ${ phone }' +
            'Message: ${ message }'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Form submitted successfully');
    });
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});