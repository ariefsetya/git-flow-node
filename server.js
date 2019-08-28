var user_routes = require('./routes/users');

var express = require('express');
const app = express()

var port = 3000

app.use('/users',user_routes);

app.listen(port, ()=>console.log('App Port ${port}'))