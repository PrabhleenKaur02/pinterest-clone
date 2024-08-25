const express = require("express");
const localStrategy = require("passport-local");
const upload = require("multer");
const passport = require("passport");

const router = express.Router();

const User = require('./models/user');
const Post = require('./models/post');

passport.use(new localStrategy(User.authenticate()));

router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;