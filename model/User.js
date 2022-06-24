"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, id, password, username, email, role) {
        this._role = 0;
        this._name = name;
        this._id = id;
        this._password = password;
        this._username = username;
        this._email = email;
        this._role = role;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
}
exports.User = User;
