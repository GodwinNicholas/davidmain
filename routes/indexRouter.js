const router = require("express").Router();
const Email = require("../models/Email");
const emailType = require("../utils/emailType");

router.get("/", (req, res) => {
    Email.find({})
        .then(emails => {
            res.send("hello")
            // return res.render("home", { emails, emailType });
        })
});

module.exports = router;