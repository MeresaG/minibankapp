const express = require('express');
const router = express.Router();
const accountController = require('../controller/AccountController');

router.post('/', async (req, res, next) => {
    console.log(`Adding new Account - controller`);
    const result = await accountController.addNewAccount(req, res);
    console.log(result);
    // PRG pattern here - redirect to account page
    res.redirect(303, "/account");
    
});

router.get('/', async (req, res, next) => {

    const accounts = await accountController.getAccount(req, res);
    res.locals = {accounts : accounts };
    console.log(accounts);
    res.render('account');
    
});


module.exports =  router;