import {NFTManagement} from "../management/NFT/NFT-management";
import * as rl from "readline-sync"
import {NFT} from "../model/NFT";

enum NFTchoice {
    SHOW_ALL_NFT = 1,
    CREATE_NFT,
}

export class NFTmenu {
    private nftManagement = new NFTManagement();

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
            choice = +rl.question("PLEASE MAKE OPTION")
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
        } while (choice != 0)


    }

    ShowAllNFTs() {
        console.log('---NFT List---');
        let NFTs = this.nftManagement.getAll();
        for (let i = 0; i < NFTs.length; i++) {
            console.log(`${i + 1},${NFTs[i].name},${NFTs[i].price},${NFTs[i].type}`);
        }
    }

    ShowCreateNFT() {
        console.log('---Add New NFT---')
        let NFTs = this.inputProduct();
    }


    inputProduct() {
        let name = rl.question('Add NFT name');
        let price = rl.question('Add NFT price');
        return new NFT(name,price);
    }
}

