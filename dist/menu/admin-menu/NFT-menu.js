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
exports.NFTMenuadmin = void 0;
const NFT_management_1 = require("../../management/NFT/NFT-management");
const rl = __importStar(require("readline-sync"));
const NFT_1 = require("../../model/NFT");
var NFTchoice;
(function (NFTchoice) {
    NFTchoice[NFTchoice["SHOW_ALL_NFT"] = 1] = "SHOW_ALL_NFT";
    NFTchoice[NFTchoice["CREATE_NFT"] = 2] = "CREATE_NFT";
    NFTchoice[NFTchoice["UPDATE_NFT"] = 3] = "UPDATE_NFT";
    NFTchoice[NFTchoice["DELETE_NFT"] = 4] = "DELETE_NFT";
    NFTchoice[NFTchoice["FIND_NFT_BYNAME"] = 5] = "FIND_NFT_BYNAME";
    NFTchoice[NFTchoice["SORT_NFT_BYPRICE"] = 6] = "SORT_NFT_BYPRICE";
})(NFTchoice || (NFTchoice = {}));
class NFTMenuadmin {
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
                case NFTchoice.UPDATE_NFT: {
                    this.updateNFT();
                    break;
                }
                case NFTchoice.DELETE_NFT: {
                    this.removeNFT();
                    break;
                }
            }
        } while (choice != 0);
    }
    ShowAllNFTs() {
        console.log('---NFT List---');
        let NFTs = this.nftManagement.getAll();
        for (let i = 0; i < NFTs.length; i++) {
            console.log(`${i + 1},${NFTs[i].name},${NFTs[i].description}`);
        }
    }
    ShowCreateNFT() {
        console.log('---Add New NFT---');
        let NFT = this.inputProduct();
        this.nftManagement.createNew(NFT);
        console.log("----ADDING DONE----");
    }
    inputProduct() {
        let name = rl.question('Add NFT name');
        let description = rl.question('Add NFT description');
        // @ts-ignore
        return new NFT_1.NFT(name, description);
    }
    updateNFT() {
        let NFTs = this.nftManagement.getAll();
        console.log(" Fix NFT infomation ");
        for (let i = 0; i < NFTs.length; i++) {
            console.log(`Name: ${NFTs[i].name} | Description: ${NFTs[i].description}`);
        }
        let NFTId = +rl.question("Pick NFT id you want to change: ");
        let indexUpdate = this.nftManagement.findById(NFTId);
        if (indexUpdate !== -1) {
            let NFT = this.inputProduct();
            NFT.id = NFTId;
            this.nftManagement.updateById(NFTId, NFT);
            console.log("your NFT has changed");
        }
        else {
            console.log("Wrong ID");
        }
    }
    removeNFT() {
        let NFT = this.nftManagement.getAll();
        console.log("Delete NFT");
        for (const nft of NFT) {
            console.log(`Name: ${nft.name} | Description: ${nft.description}`);
        }
        let idRemove = +rl.question("Write name you want to delete :");
        let lengthNFT = NFT.length;
        this.nftManagement.removeById(idRemove);
        if (lengthNFT !== NFT.length) {
            console.log("Delete Done");
        }
        else {
            console.log("Please Try Again");
        }
    }
}
exports.NFTMenuadmin = NFTMenuadmin;
