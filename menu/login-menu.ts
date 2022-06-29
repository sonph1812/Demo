import { UserManagement } from "../management/user/user-management";
import { AdminMenu } from "./admin-menu/admin-menu";
import { User } from "../model/User";
import * as rl from "readline-sync"
import { Role } from "../model/role"
import { NFTUsermenu } from "./NFT-User-menu/NFT-user-menu";

enum LoginChoice {
    lOGIN = 1,
    REGISTER = 2
}

export class LoginMenu {
    private userManagement = new UserManagement();
    private adminMenu = new AdminMenu();
    private NFTUserMenu = new NFTUsermenu();
    private NFTAdminMenu = new AdminMenu()

    inputUser(): User {
        let username = this.inputUsername();
        let regexForPassword: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g;
        let password = this.inputPassword(regexForPassword);
        this.inputConfirmPassword(password);
        let name = rl.question('Enter your name:');
        let email = this.inputEmail();
        let id = UserManagement.id
        return new User(name, id, password, username, email);
    }

    inputEmail(): string {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question(' your email (abc@gmail.com):');
            let regexForEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Invalid email format.!')
            } else {
                isValidEmail = true;
                let currentUser = this.userManagement.findByEmail(email);
                if (currentUser) {
                    console.log('Email already exists');
                    isValidEmail = false;
                } else {
                    isValidEmail = true;
                }
            }

        } while (!isValidEmail);
        return email;
    }

    inputConfirmPassword(password: string): void {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Retype your password :');
            if (password != confirmPassword) {
                console.log('Password entered is mismatched !');
            }
        } while (password != confirmPassword)
    }

    inputUsername(): string {
        let username = '';
        let isValidUsername = true;
        do {
            username = rl.question('Type username:');
            let currentUser = this.userManagement.findByUsername(username);
            if (currentUser) {
                isValidUsername = false;
                console.log('Username already existed!')
            } else {
                isValidUsername = true;
            }
        } while (!isValidUsername);
        return username.toLowerCase();
    }

    inputPassword(regexForPassword: RegExp): string {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Password minimum six characters, at least one letter and one number :');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password must have Minimum six characters, at least one letter and one number !')
            } else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }

    run() {
        let choice = -1;
        do {
            console.log('---NFT MANAGEMENT---');
            console.log('1. SIGN IN')
            console.log('2. SIGN UP')
            console.log('0. EXIT')
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
        console.log('You have signed up successfully !')
    }

    loginForm() {
        let username = rl.question('Enter your username here :');
        let password = rl.question('Enter your password here :');

        let currentUser = this.userManagement.login(username, password);
        if (currentUser) {
            console.log('Logged in successfully !');


            if (currentUser.role == Role.ADMIN) {

                this.NFTAdminMenu.run();
            }
            else if(currentUser.role == Role.USER){

                this.NFTUserMenu.run();


            }
        } else {
            console.log('Invalid account or password !');

        }
    }

}
