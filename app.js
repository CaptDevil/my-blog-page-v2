const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
require('./config/key');
require('./config/auth');
require('./config/passport')(passport)

app.use(expressLayouts);
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/posts'));

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`Server started on port ${port}...`));