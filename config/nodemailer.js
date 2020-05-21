/*****************IMPORTING FILES*******************************/
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

/*****************DEFINING TRANSPORTER*******************************/
let transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "********@gmail.com",
        pass: "*********"
    } 
});

/*****************DEFINING TEMPLATE*******************************/
let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, "../views/mailers", relativePath),
        data,
        function(err, template){
            if(err){console.log("Error in rendering template in nodemailer", err); return;}
            mailHTML = template;
        }
    )
    return mailHTML;
}

/*****************EXPORTING MODULE*******************************/
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}