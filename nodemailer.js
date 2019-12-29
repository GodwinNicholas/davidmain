const nodemailer = require("nodemailer");
const encryptMessage = require("./utils/encryptMessage");
const wrapMsg = require("./utils/temp");

const emails = require("./emails");


async function main(list, email, req, res) {
    let counter = list.length - 1;
    let email_counter = emails.length - 1;
    const reports = {
        failed: [],
        sent: []
    };


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: emails[email_counter].address, // generated ethereal user
            pass: emails[email_counter].password // generated ethereal password
        }
    });

    // send mail with defined transport object
    sendEmail();
    async function sendEmail() {
        await transporter.sendMail({
            from: emails[email_counter].address, // sender address
            to: list[counter].address, // list of receivers
            // to: 'craftyprogrammer@gmail.com', // list of receivers
            subject: encryptMessage(email.subject), // Subject line
            html: wrapMsg(encryptMessage(email.body)) // html body
        }, (err, info) => {

            if (err) {
                console.log(err)
                reports.failed.push(list[counter].address);
            }
            if (!err) {
                reports.sent.push(list[counter].address);
            }
            if (counter > 0 && email_counter > 0) {
                counter--;
                email_counter--;
                sendEmail().catch(err => console.log(err))
            }
            if (email_counter == 0) {
                email_counter = emails.length - 1;
            }
            else if (counter == 0) {
                return res.render("Reports", { reports });
            }


        })
    }
}


async function sendListEmail(list, email, req, res) {
    main(list, email, req, res)
}


module.exports = sendListEmail;