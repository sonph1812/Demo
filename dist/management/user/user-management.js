"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const User_1 = require("../../model/User");
const role_1 = require("../../model/role");
class UserManagement {
    constructor() {
        let admin = new User_1.User('admin', 1, "son123", 'son', 'admin@gmail.com');
        admin.id = UserManagement._id;
        admin.role = role_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    createNew(t) {
        UserManagement._id++;
        t.id = UserManagement._id;
        t.role = role_1.Role.USER;
        UserManagement.users.push(t);
    }
    getAll() {
        return UserManagement.users;
    }
    removeById(id) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }
    findByUsername(userName) {
        for (let user of UserManagement.users) {
            if (userName == user.email) {
                return user;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    login(username, password) {
        for (let user of UserManagement.users) {
            if (username == user.username && password == user.password) {
                // UserManagement.session = new SessionManagement(user)
                return user;
            }
        }
        return null;
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    // @ts-ignore
    findByEmail(email) {
        for (let user of UserManagement.users) {
            if (email == user.email) {
                return user;
            }
        }
        return null;
    }
    static get id() {
        return this._id;
    }
    static set id(value) {
        this._id = value;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement._id = 1;
