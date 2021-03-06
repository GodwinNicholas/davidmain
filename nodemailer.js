const nodemailer = require("nodemailer");
const encryptMessage = require("./utils/encryptMessage");
const wrapMsg = require("./utils/temp");


async function main(list, email, req, res) {
    let counter = list.length - 1;
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
            user: 'davidmainhood@gmail.com', // generated ethereal user
            pass: 'password123' // generated ethereal password
        }
    });

    // send mail with defined transport object
    sendEmail();
    async function sendEmail() {
        await transporter.sendMail({
            from: 'davidmainhood@gmail.com', // sender address
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
            if (counter > 0) {
                counter--;
                sendEmail().catch(err => console.log(err))
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