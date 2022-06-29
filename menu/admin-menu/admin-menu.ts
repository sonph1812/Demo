import * as rl from 'readline-sync';
import {NFT} from "../../model/NFT";
import {NFTUsermenu} from "../NFT-User-menu/NFT-user-menu";
import { NFTAdminmenu } from "./NFT-menu";

enum AdminChoice {
    NFT_MANAGEMENT = 1,
    CATEGORY_MANAGEMENT = 2,
}

export class AdminMenu {
    // private nftMenu = new NFTUsermenu();
    // private categoryMenu = new CategoryMenu();
private  nftAdmin = new NFTAdminmenu()
    run() {
        let choice = -1;
        do {
            console.log('********* NFT MANAGEMENT APP ********* ')
            console.log('1.NFT MENU')
            console.log('2.CATEGORY MENU')
            console.log('0. LOG OUT ')
            choice = +rl.question('Please Making Selection: ')
            switch (choice) {
                case AdminChoice.NFT_MANAGEMENT: {
                    this.nftAdmin.run();
                    break;
                }
                case AdminChoice.CATEGORY_MANAGEMENT: {

                }
            }

        } while (choice != 0);
    }

}