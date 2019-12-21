const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require("path")


const app = express();
const port = process.env.PORT || 8000



// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// EJS
const viewsPath = path.join(__dirname, './views')
app.set('views', viewsPath)

app.set('view engine', 'ejs');
app.use(expressLayouts);

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

// // Express session
// app.use(
//     session({
//         secret: 'secret',
//         resave: true,
//         saveUninitialized: true
//     })
// );

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Connect flash
// app.use(flash());

// // Global variables
// app.use(function (req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
// });


// routes
app.use("/", require("./routes/indexRouter.js"));
app.use("/send_email", require("./routes/sendEmail.js"));
app.use("/upload", require("./routes/upload"));
app.use("/delete", require("./routes/delete"));
app.use("/deleteAll", require("./routes/deleteAll"));
app.use("/reports", require("./routes/Reports"));

app.listen(port, () => console.log(`server started on port ${port}`));