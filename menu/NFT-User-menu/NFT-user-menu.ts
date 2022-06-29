import { NFTManagement } from "../../management/NFT/NFT-management";
import * as rl from "readline-sync"
import { NFT } from "../../model/NFT";

enum NFTchoice {
    SHOW_ALL_MY_NFT = 1,
    CREATE_NFT,
    UPDATE_NFT,
    DELETE_MY_NFT,
    FIND_NFT_BY_NAME,
    SORT_NFT_BY_PRICE
}

export class NFTUsermenu {
    private nftManagement = new NFTManagement();


    run() {
        let choice = -1;
        do {
            console.log('------USER NFT MANAGEMENT------');
            console.log('1. SHOW ALL MY NFTs');
            console.log('2. ADD A NEW NFT');
            console.log('3. UPDATE NFT');
            console.log('4. DELETE NFT');
            console.log('5. FIND NFT BY NAME');
            console.log('6. SORT NFT BY PRICE');
            console.log('0. RETURN');
            choice = +rl.question("PLEASE MAKE OPTION:  ")
            switch (choice) {
                case NFTchoice.SHOW_ALL_MY_NFT: {
                    this.ShowAllNFTs();
                    break;
                }
                case NFTchoice.CREATE_NFT: {
                    this.ShowCreateNFT();
                    break;
                }
                case NFTchoice.UPDATE_NFT: {
                    this.updateNFT()
                    break;
                }
                case  NFTchoice.DELETE_MY_NFT: {
                    this.removeNFT()
                    break;
                }
                case  NFTchoice.FIND_NFT_BY_NAME: {
                    this.findNFTByName()
                    break
                }
            }

        } while (choice != 0)


    }

    ShowAllNFTs() {
        console.log('---NFT List---');
        let NFTs = this.nftManagement.getAll();
        for (let i = 0; i < NFTs.length; i++) {
            console.log(`${i + 1},${NFTs[i].name},${NFTs[i].description}`);
        }
    }

    ShowCreateNFT() {
        console.log('---Add New NFT---')
        let NFT = this.inputProduct();
        this.nftManagement.createNew(NFT);
        console.log("----ADDING DONE----")
    }


    inputProduct(): NFT {
        let name = rl.question('Add NFT name: ');
        let description = rl.question('Add NFT description: ');

        // @ts-ignore
        return new NFT(name, description);
    }

    updateNFT(): void {
        let NFTs = this.nftManagement.getAll();
        console.log(" Fix NFT infomation ");
        for (let i = 0; i < NFTs.length; i++) {
            console.log(` ID: ${NFTs[i].id},Name: ${NFTs[i].name} | Description: ${NFTs[i].description}`)
        }
        let NFTId = +rl.question("Pick NFT id you want to change: ")
        let indexUpdate = this.nftManagement.findById(NFTId);
        if (indexUpdate !== -1) {
            let NFT = this.inputProduct();
            NFT.id = NFTId;
            this.nftManagement.updateById(NFTId, NFT);
            console.log("your NFT has changed")
        } else {
            console.log("Wrong ID")
        }
    }

    removeNFT(): void {
        let NFT = this.nftManagement.getAll();
        console.log("Delete NFT")
        for (const nft of NFT) {
            console.log(` ID: ${nft.id},Name: ${nft.name} | Description: ${nft.description}`)
        }
        let idRemove = +rl.question("Write name you want to delete: ")
        let lengthNFT = NFT.length;
        this.nftManagement.removeById(idRemove);
        if (lengthNFT !== NFT.length) {
            console.log("Delete Done");
        } else {
            console.log("Please Try Again");
        }
    }

    findNFTByName() {
        let find: string = rl.question("Enter name you want to check:  ")
        let findAccount = this.nftManagement.findByName(find)
        if (findAccount) {
            console.log("Result")
            console.table(findAccount)
        }else {
            console.log("Not found Name")
        }
    }
    BuyNFT(nft:NFT){
        let choice =-1;
        let order = nft.()
    }
}





