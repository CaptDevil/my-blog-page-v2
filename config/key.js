const mongoose = require('mongoose');

//Add your mongodb URL inside ""
mongoose.connect("", { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(err)
        throw err;
    console.log('MongoDB connected...');
});

const Post = require('../models/Posts');
const User = require('../models/Users');