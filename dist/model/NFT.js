"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
const MarketPlace_1 = require("./MarketPlace");
class NFT {
    constructor(name, description, userId) {
        this._marketplace = new MarketPlace_1.MarketPlace();
        this._name = name;
        this._description = description;
        this._id = NFT.count;
        NFT.count++;
        this._ownBy = userId;
        this._createBy = userId;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get ownBy() {
        return this._ownBy;
    }
    set ownBy(value) {
        this._ownBy = value;
    }
    get createBy() {
        return this._createBy;
    }
    set createBy(value) {
        this._createBy = value;
    }
    get marketplace() {
        return this._marketplace;
    }
    set marketplace(value) {
        this._marketplace = value;
    }
}
exports.NFT = NFT;
NFT.count = 1;
