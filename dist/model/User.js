"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const MarketPlace_1 = require("./MarketPlace");
const SellOrder_1 = require("./SellOrder");
class User {
    constructor(name, id, password, username, email) {
        this._role = 0;
        this.sellOrder = new SellOrder_1.SellOrder();
        this._name = name;
        this._id = id;
        this._password = password;
        this._username = username;
        this._email = email;
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
    addToSellOrder(t) {
        this.sellOrder.add(t);
    }
    getSellOrder() {
        return this.sellOrder.getTotal();
    }
    findToSellOrder(index) {
        let Marketplace = this.sellOrder.findByIndex(index);
        if (Marketplace) {
            // @ts-ignore
            return MarketPlace_1.MarketPlace;
        }
        else {
            return null;
        }
    }
    findBySellOrder() {
        // @ts-ignore
        let marketplace = this.sellOrder.findBySellOrder(t);
        if (marketplace) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.User = User;
