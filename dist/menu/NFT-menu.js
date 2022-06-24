"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTmenu = void 0;
const NFT_management_1 = require("../management/NFT/NFT-management");
const rl = __importStar(require("readline-sync"));
const NFT_1 = require("../model/NFT");
var NFTchoice;
(function (NFTchoice) {
    NFTchoice[NFTchoice["SHOW_ALL_NFT"] = 1] = "SHOW_ALL_NFT";
    NFTchoice[NFTchoice["CREATE_NFT"] = 2] = "CREATE_NFT";
})(NFTchoice || (NFTchoice = {}));
class NFTmenu {
    constructor() {
        this.nftManagement = new NFT_management_1.NFTManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('------NFT MANAGEMENT------');
            console.log('1. SHOW ALL NFTs');
            console.log('2. ADD A NEW NFT');
            console.log('3. UPDATE NFT');
            console.log('4. DELETE NFT');
            console.log('5. FIND NFT BY NAME');
            console.log('6. SORT NFT BY PRICE');
            console.log('0. RETURN');
            choice = +rl.question("PLEASE MAKE OPTION");
            switch (choice) {
                case NFTchoice.SHOW_ALL_NFT: {
                    this.ShowAllNFTs();
                    break;
                }
                case NFTchoice.CREATE_NFT: {
                    this.ShowCreateNFT();
                    break;
                }
            }
        } while (choice != 0);
    }
    ShowAllNFTs() {
        console.log('---NFT List---');
        let NFTs = this.nftManagement.getAll();
        for (let i = 0; i < NFTs.length; i++) {
            console.log(`${i + 1},${NFTs[i].name},${NFTs[i].price},${NFTs[i].type}`);
        }
    }
    ShowCreateNFT() {
        console.log('---Add New NFT---');
        let NFTs = this.inputProduct();
    }
    inputProduct() {
        let name = rl.question('Add NFT name');
        let price = rl.question('Add NFT price');
        return new NFT_1.NFT(name, price);
    }
}
exports.NFTmenu = NFTmenu;
