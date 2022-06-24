"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["lOGIN"] = 1] = "lOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new UserManagement;
    }
}
exports.LoginMenu = LoginMenu;
