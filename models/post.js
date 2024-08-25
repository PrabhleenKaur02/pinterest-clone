const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Array,
        default: []
    }
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;