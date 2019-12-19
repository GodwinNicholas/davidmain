const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const upload = require("../utils/multerConfig");
const Email = require("../models/Email");

router.get("/", (req, res) => {
    return res.render("Upload", { msg: "" });
});


router.post("/", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.render('Upload', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                return res.render('Upload', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                // add emails to database
                fs.readFile(path.join(__dirname, "../public", "uploads", "list.txt"), "utf8", (err, data) => {
                    if (err) console.log(err);
                    // const emailList = data.replace(/\n/g, " ").split(" ");
                    const emailList = data.match(/\S+@\S+\.\S+/gmi);
                    let counter = emailList.length - 1;
                    (function addEmail() {
                        const newEmail = new Email({
                            address: emailList[counter],
                            user: req.user
                        });

                        Email.findOne({ address: [emailList[counter]] })
                            .then(email => {
                                if (email) {
                                    if (counter > 0) {
                                        counter--;
                                        return addEmail();
                                    }
                                    else {
                                        return res.render('Upload', {
                                            msg: 'some emails already exist!'
                                        });
                                    }

                                } else {
                                    newEmail.save()
                                        .then(() => {
                                            if (counter > 0) {
                                                counter--;
                                                return addEmail();
                                            }
                                            else {
                                                return res.render('Upload', {
                                                    msg: 'Emails Uploaded!'
                                                });
                                            }
                                        })
                                }
                            })
                    })()
                })
            }
        }
    });
});


module.exports = router;