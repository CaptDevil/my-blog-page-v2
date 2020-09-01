const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('Posts',postSchema);

module.exports = Post;