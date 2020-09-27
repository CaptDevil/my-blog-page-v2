const express = require('express');
const mongoose = require('mongoose')
const { ensureAuthenticated } = require('../config/auth')
const router = express.Router();

let Post = mongoose.model('Posts');

router.get('/',ensureAuthenticated,(req,res)=>{
    Post.find((err,result)=>{
        res.render('mainPage',{results: result});
    })
})

router.get('/add',ensureAuthenticated,(req,res)=>{
    res.render('addPost');
})

router.post('/add',(req,res)=>{
    const { date,title,body } = req.body;
    Post.countDocuments((err,count)=>{
        if(err)
            throw err

        let newPost = new Post({ id:count+1,title,body,date })
        newPost.save((err,docs)=>{
            if(err)
                throw err;
            
        })
        res.redirect('/posts');
    });
})

router.get('/update/:id',ensureAuthenticated,(req,res)=>{
    Post.findOne({ id: req.params.id },(err,result)=>{
        if(err)
            throw err;
        res.render('editPage',{ result: result })
    })
})
router.post('/update/:id',(req,res)=>{
    const { title,body } = req.body;
    Post.findOne({ id: req.params.id },(err,result)=>{
        if(err)
            throw err;
        Post.updateOne({ id: result.id },{$set:{ title: title,body: body  }},(err,result)=>{
            if(err)
                throw err;
            res.redirect('/posts');
        });
    })
})

router.get('/delete/:id',ensureAuthenticated,(req,res)=>{
    Post.findOne({ id: req.params.id },(err,result)=>{
        if(err)
            throw err;
        Post.deleteOne({ id: req.params.id },(err)=>{
            if(err)
                throw err;
        });
        res.redirect('/posts');
    })
})

module.exports = router;