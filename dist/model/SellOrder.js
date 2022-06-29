"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellOder = void 0;
var status;
(function (status) {
    status[status["Cancel"] = 0] = "Cancel";
    status[status["Complete"] = 1] = "Complete";
    status[status["Confirm"] = 2] = "Confirm";
})(status || (status = {}));
class SellOder {
    constructor(status, price, createTime) {
        this._status = 1;
        this._status = status;
        this._price = price;
        this._createTime = createTime;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get createTime() {
        return this._createTime;
    }
    set createTime(value) {
        this._createTime = value;
    }
}
exports.SellOder = SellOder;
