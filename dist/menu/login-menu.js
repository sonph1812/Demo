"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
const user_management_1 = require("../management/user/user-management");
const admin_menu_1 = require("./admin-menu/admin-menu");
const User_1 = require("../model/User");
const rl = __importStar(require("readline-sync"));
const role_1 = require("../model/role");
const NFT_user_menu_1 = require("./NFT-User-menu/NFT-user-menu");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["lOGIN"] = 1] = "lOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
        this.adminMenu = new admin_menu_1.AdminMenu();
        this.NFTUserMenu = new NFT_user_menu_1.NFTUsermenu();
    }
    inputUser() {
        let username = this.inputUsername();
        let regexForPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g;
        let password = this.inputPassword(regexForPassword);
        this.inputConfirmPassword(password);
        let name = rl.question('Enter your name:');
        let email = this.inputEmail();
        let id = user_management_1.UserManagement.id;
        return new User_1.User(name, id, password, username, email);
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question(' your email (abc@gmail.com):');
            let regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Invalid email format.!');
            }
            else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email already exists');
                    isValidEmail = false;
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    inputConfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Type your password :');
            if (password != confirmPassword) {
                console.log('Password entered is mismatched !');
            }
        } while (password != confirmPassword);
    }
    inputUsername() {
        let username = '';
        let isValidUsername = true;
        do {
            username = rl.question('Type username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('Username already existed!');
            }
            else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username.toLowerCase();
    }
    inputPassword(regexForPassword) {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Password minimum six characters, at least one letter and one number :');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password must have Minimum six characters, at least one letter and one number !');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    run() {
        let choice = -1;
        do {
            console.log('---NFT MANAGEMENT---');
            console.log('1. SIGN IN');
            console.log('2. SIGN UP');
            console.log('0. EXIT');
            choice = +rl.question('INPUT YOUR OPTION:');
            switch (choice) {
                case LoginChoice.lOGIN: {
                    console.log('---SIGN IN---');
                    this.loginForm();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---SIGN UP---');
                    this.registerForm();
                    break;
                }
            }
        } while (choice != 0);
    }
    registerForm() {
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log('You have signed up successfully !');
    }
    loginForm() {
        let username = rl.question('Enter your username here :');
        let password = rl.question('Enter your password here :');
        let currentUser = this.userManagement.login(username, password);
        if (currentUser) {
            console.log('Logged in successfully !');
            if (currentUser.role == role_1.Role.ADMIN) {
                this.adminMenu.run();
            }
            else {
                this.NFTUserMenu.run();
            }
        }
        else {
            console.log('Invalid account or password !');
        }
    }
}
exports.LoginMenu = LoginMenu;
