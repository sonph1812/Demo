import * as rl from 'readline-sync';
import {NFT} from "../model/NFT";
import {NFTmenu} from "./NFT-menu";

enum AdminChoice {
    NFT_MANAGEMENT = 1,
    CATEGORY_MANAGEMENT = 2,
}

export class AdminMenu {
    private nftMenu = new NFTmenu();
    // private categoryMenu = new CategoryMenu();

    run() {
        let choice = -1;
        do {
            console.log('********* NFT MANAGEMENT APP ********* ')
            console.log('1.NFT MENU')
            console.log('2.CATEGORY MENU')
            console.log('0. LOG OUT ')
            choice = +rl.question('Please Making Selection')
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