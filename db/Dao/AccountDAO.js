/**
 * AccountDAO.js
 * @author Meresa G

 */

"use strict";
const dbConnectionMgr  = require('../dbconnection');
const Account = require('../../model/Account');
const dbConnection = require('../dbconnection');

const AccountDAO = ( function() {

    /**
     * fetches and return all available accounts in the database.
     */

    const getAccount = async function() {

        const qryStrGetAccount = "select *  from `MiniBankApp`.Account";
        try {
            
            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts] = await dbConnection.promise().query(qryStrGetAccount);
            return accounts;

        } catch (error) {
            console.log(`DB Access Error : ${error}`);
            throw error;
        }
    };

    const saveAccount = async function(a) {
        const cmdStrSaveAccount = `insert into Account (id, name, accountType) values ('${a.getId()}', '${a.getName()}', '${a.getAccountType()}')`;
        console.log(`SQL Insert Command String: ${cmdStrSaveAccount}`);
        try { 
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    return {
        getAccount : getAccount,
        saveAccount : saveAccount
    }

})();

module.exports = AccountDAO;