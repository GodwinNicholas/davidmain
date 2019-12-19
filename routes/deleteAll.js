const router = require("express").Router();
const Email = require("../models/Email");


router.post("/", (req, res) => {
    const id = req.body.id;
    Email.deleteMany({})
        .then(() => {
            return res.redirect("/")
        })
});


module.exports = router;