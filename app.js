const express = require('express');
const bodyParser = require('body-parser');



const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', (req, res, next) => {
    //rendering the file that holds the form
    res.render('index', { pageTitle: 'Add User'});
});

app.get('/users', (req, res, next) => {
    //rendering the file that contains the user names
    res.render('users', {
        pageTitle: 'User',
        users: users,
        hasUsers: users.length > 0
    });
});

app.post('/add-user', (req, res, next) => {
    //redirecting the user to the users page
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(3000, () => {
        console.log('listening on : 3000...');
});