const mongoose = require('mongoose');

//Add your mongodb URL inside ""
mongoose.connect("mongodb+srv://prabhu:prabhu123@cluster0.8o6bc.mongodb.net/blog_page?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(err)
        throw err;
    console.log('MongoDB connected...');
});

const Post = require('../models/Posts');
const User = require('../models/Users');