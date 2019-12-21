const router = require("express").Router();
const Email = require("../models/Email");
const emailType = require("../utils/emailType");

router.get("/", (req, res) => {
    Email.find({})
        .then(emails => {
            return res.render("home.ejs", { emails, emailType });
        })
});

module.exports = router;