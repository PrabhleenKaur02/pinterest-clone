const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://kaurprabhleen2002:EGiNeRa7yLhNuZc1@cluster0.ih4d0ql.mongodb.net/pinterestServer");

const userSchema = mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dp: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]

});

userSchema.plugin(plm);

const User = mongoose.model('user', userSchema);

module.exports = User;
