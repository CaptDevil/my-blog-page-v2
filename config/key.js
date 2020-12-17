const mongoose = require('mongoose');

//Add your mongodb URL inside ""
// mongodb+srv://prabhu:ihuIN0CpPzYjG7fM@cluster0.8o6bc.mongodb.net/blog_page?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(err)
        throw err;
    console.log('MongoDB connected...');
});

const Post = require('../models/Posts');
const User = require('../models/Users');