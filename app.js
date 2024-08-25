const express = require("express")
const path = require("path");
const ejs = require("ejs");
const expressSession = require("express-session");
const passport = require("passport");

const User = require('./models/user');
const router = require('./index');

const app = express();
const port = 4001;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(expressSession({
    secret: 'Pinterest-Pookie@2024',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
})

app.use('/', router);

app.listen(port, () => console.log(`Server running on port: ${port}`));