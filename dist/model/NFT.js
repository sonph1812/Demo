"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
class NFT {
    constructor(name, price) {
        this._type = 0;
        this._id = 0;
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.NFT = NFT;
