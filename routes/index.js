const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

const Post =  mongoose.model('Posts');

router.get('/',(req,res)=>{
    Post.find((err,result)=>{
        res.render('index',{result: result});
    })
})

module.exports = router;