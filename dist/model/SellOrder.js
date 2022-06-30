"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellOrder = void 0;
const NFT_1 = require("./NFT");
class SellOrder {
    constructor() {
        this._Price = 0;
        this._marketplace = [];
    }
    get Price() {
        return this._Price;
    }
    set Price(value) {
        this._Price = value;
    }
    get marketplace() {
        return this._marketplace;
    }
    set marketplace(value) {
        this._marketplace = value;
    }
    add(t) {
        this._marketplace.push(t);
    }
    remove(i) {
        this._marketplace.splice(i, 1);
    }
    getTotal() {
        let total = 0;
        for (let Marketplace of this._marketplace) {
            total += (NFT_1.NFT.price);
        }
        return total;
    }
    findBySellOrder(t) {
        let Marketplace = this._marketplace.includes(t);
        if (Marketplace) {
            return true;
        }
        else {
            return false;
        }
    }
    findByIndex(index) {
        return this._marketplace[index];
    }
}
exports.SellOrder = SellOrder;
