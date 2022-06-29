"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManagement = void 0;
class SessionManagement {
    constructor(user) {
        this._user = user;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    getUserId() {
        return this.user.id;
    }
}
exports.SessionManagement = SessionManagement;
