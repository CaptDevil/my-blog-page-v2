const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(err)
        throw err;
    console.log('MongoDB connected...');
});

const Post = require('../models/Posts');
const User = require('../models/Users');