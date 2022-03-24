/**
 * AccountController.js
 * @author Meresa G
 */

"use strict";

const AccountDAO = require('../db/Dao/AccountDAO');
const Account  = require('../model/Account');

const accountController = ( function () {

    const getAccount = async function(req, res) {
        try {
            const accounts = await AccountDAO.getAccount();
            console.log(`AccountsController List : ${accounts}`);
            return accounts;
        } catch (error) {
            res.status(500);
            res.render('50x', {error : error});
        }

    };

    const addNewAccount = async function(req, res) {
        JSON.stringify(req.body);
        const Id = req.body.txtAccountNo;
        const name = req.body.txtCustomerName;
        const accountType = req.body.ddlAccountType;
        const a = new Account(Id, name, accountType);
        try {
            const opRes = await AccountDAO.saveAccount(a);
            console.log(`Save Account in controller: ${opRes}`);
            return opRes;
        } catch(error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    };

    return {
        getAccount : getAccount,
        addNewAccount : addNewAccount
    }

})();

module.exports = accountController;