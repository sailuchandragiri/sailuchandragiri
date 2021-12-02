const transporter = require("../configs/mail");

module.exports = ((message) => {
    var message = {
        from: message.from,
        to: message.to,
        subject: message.subject,
        text: message.text,
        html: message.html
      };
      
      transporter.sendMail(message);
    
})

