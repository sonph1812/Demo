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
exports.AdminMenu = void 0;
const rl = __importStar(require("readline-sync"));
const NFT_menu_1 = require("./NFT-menu");
var AdminChoice;
(function (AdminChoice) {
    AdminChoice[AdminChoice["NFT_MANAGEMENT"] = 1] = "NFT_MANAGEMENT";
    AdminChoice[AdminChoice["CATEGORY_MANAGEMENT"] = 2] = "CATEGORY_MANAGEMENT";
})(AdminChoice || (AdminChoice = {}));
class AdminMenu {
    constructor() {
        this.nftMenu = new NFT_menu_1.NFTmenu();
    }
    // private categoryMenu = new CategoryMenu();
    run() {
        let choice = -1;
        do {
            console.log('********* NFT MANAGEMENT APP ********* ');
            console.log('1.NFT MENU');
            console.log('2.CATEGORY MENU');
            console.log('0. LOG OUT ');
            choice = +rl.question('Please Making Selection');
            switch (choice) {
                case AdminChoice.NFT_MANAGEMENT: {
                    this.nftMenu.run();
                    break;
                }
                case AdminChoice.CATEGORY_MANAGEMENT: {
                }
            }
        } while (choice != 0);
    }
}
exports.AdminMenu = AdminMenu;
