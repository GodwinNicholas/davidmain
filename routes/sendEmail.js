const router = require("express").Router();
const sendListEmail = require("../nodemailer");
const Email = require("../models/Email");

router.get("/", (req, res) => {
    return res.render("Send");
});

router.post("/", (req, res) => {
    const email = {
        subject: req.body.subject,
        body: req.body.body
    }
    Email.find({})
        .then(list => {
            sendListEmail(list, email, req, res)
        });
});

module.exports = router;