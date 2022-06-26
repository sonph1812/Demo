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
const admin_menu_1 = require("./admin-menu");
const User_1 = require("../model/User");
const rl = __importStar(require("readline-sync"));
const role_1 = require("../model/role");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["lOGIN"] = 1] = "lOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
        this.adminMenu = new admin_menu_1.AdminMenu();
    }
    inputUser() {
        let username = this.inputUsername();
        let regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4}$/g;
        let password = this.inputPassword(regexForPassword);
        this.inputConfirmPassword(password);
        let name = rl.question('Nhập họ tên:');
        let email = this.inputEmail();
        let id = user_management_1.UserManagement.id;
        return new User_1.User(username, id, password, email, name);
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Nhập email (abc@gmail.com):');
            let regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Định dạng email không hợp lệ!');
            }
            else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email đã tồn tại');
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
            confirmPassword = rl.question('Nhập lại mật khẩu:');
            if (password != confirmPassword) {
                console.log('Mật khẩu nhập lại không khớp!');
            }
        } while (password != confirmPassword);
    }
    inputUsername() {
        let username = '';
        let isValidUsername = true;
        do {
            username = rl.question('Nhập username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('Tên tài khoản đã tồn tại!');
            }
            else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username;
    }
    inputPassword(regexForPassword) {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Nhập mật khẩu (Có 1 ký tự viết hoa, 1 viết thường, 1 ký tự đặc biệt và 1 số):');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password nhập vào phải có ít nhất 1 ký tự thường 1 hoa 1 đặc biệt 1 số!');
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
            console.log('---Hệ thống quản lý sản phẩm---');
            console.log('1. Đăng nhập');
            console.log('2. Đăng ký');
            console.log('0. Thoát');
            choice = +rl.question('Nhập lựa chọn của bạn:');
            switch (choice) {
                case LoginChoice.lOGIN: {
                    console.log('---Đăng nhập---');
                    this.loginForm();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---Đăng ký tài khoản---');
                    this.registerForm();
                    break;
                }
            }
        } while (choice != 0);
    }
    registerForm() {
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log('Đăng ký thành công!');
    }
    loginForm() {
        let username = rl.question('Nhập tài khoản:');
        let password = rl.question('Nhập mật khẩu:');
        /*
        current user là lấy ra giá trị của user đang đăng nhập.
        Nếu username và password không đúng thì current user = null
        * */
        let currentUser = this.userManagement.login(username, password);
        if (currentUser) {
            console.log('Đăng nhập thành công!');
            //Check role => admin thì mở menu admin, user mở menu user
            if (currentUser.role == role_1.Role.ADMIN) {
                //mở menu admin
                this.adminMenu.run();
            }
            else {
                //mở menu user
                console.log('---Bán hàng---');
                console.log('1. Thêm sản phẩm vào giỏ hàng');
                console.log('2. Mua hàng');
                console.log('3. Thanh toán');
                console.log('0. Đăng xuất');
            }
        }
        else {
            console.log('Tài khoản hoặc mật khẩu không đúng!');
        }
    }
}
exports.LoginMenu = LoginMenu;
