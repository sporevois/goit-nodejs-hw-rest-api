const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    await sgMail.send({...data, from: 'stanislav.sporevoi@gmail.com'})
}


module.exports = sendEmail;