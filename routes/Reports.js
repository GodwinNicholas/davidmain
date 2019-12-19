const router = require("express").Router();


router.get("/", (req, res) => {
    return res.render("Reports", {})
})

module.exports = router;