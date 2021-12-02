
const transporter = require("../configs/usermail.config")

const sendMail = ((message) => {
    var message = {
        from: message.from,
        to: message.to,
        subject: message.subject,
        text: message.text,
        html: message.html
    }
    transporter.sendMail(message);
});

module.exports = sendMail;