
"use strict";

function Account(id, name, accountType) {
    this.id = id;
    this.name = name;
    this.accountType = accountType;
}

Account.prototype.getId = function() {
    return this.id;
}

Account.prototype.getName = function() {
    return this.name;
}

Account.prototype.getAccountType = function() {
    return this.accountType;
}

module.exports = Account;