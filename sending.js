/**
 * This file will contain the sample code for sending the email notification
 */
const nodemailer = require('nodemailer');


const tranporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    //host: "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: 'tilakbhaiya0909@gmail.com',
        pass: 'duclsvczjawxslul',
    },
    secure: true,
});

console.log(typeof tranporter);

/**
 * Sending email
 */

const mailDataObj = {
    from: 'crm-no-reply@gmail.com',
    to: 'tilakbhaiya0909@gmail.com',
    subject: "Testing the code to send email",
    text: "Sample text content",
    html: "<b> Hello Hi Arun how are you ! </b>"
}

tranporter.sendMail(mailDataObj, (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("email sent successfully");
    }
})