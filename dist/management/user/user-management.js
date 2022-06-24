"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const User_1 = require("../../model/User");
class UserManagement {
    constructor() {
        let admin = new User_1.User('admin', '123456', 'son', 'admin@gmail.com');
        admin.id = UserManagement.id;
        admin.role = Role.ADMIN;
        UserManagement.users.push(admin);
    }
    createNew(t) {
        UserManagement.id++;
        t.id = UserManagement.id;
        t.role = Role.USER;
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
    findByEmail(email) {
        for (let user of UserManagement.users) {
            if (email == user.email) {
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
    findByName(username) {
        return undefined;
    }
    login(username, password) {
        return undefined;
    }
    updateById(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 1;
