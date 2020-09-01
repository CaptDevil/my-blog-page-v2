const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const { ensureNotAuthenticated } = require('../config/auth');
const router = express.Router();
const User = mongoose.model('User');

router.get('/login',ensureNotAuthenticated,(req,res)=>{
    res.render('login');
})

router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect: '/posts',
        failureRedirect: '/users/login'
    })(req,res,next)
})

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

module.exports = router