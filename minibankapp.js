const express = require('express');
const path = require('path');
const mysql  = require('mysql2');
const app = express();
const PORT = process.env.PORT || 8000;

//set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/home'));

//Account route
app.use('/account', require('./routes/account_route'));

app.listen(PORT, () => console.log(`MiniBankAPP Server Started on Port ${PORT}`));
