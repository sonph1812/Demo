import { INFTManagement } from "./i-NFT-management";
import { NFT } from "../../model/NFT";

export class NFTManagement implements INFTManagement {
    private static id: number = 0;
    static NFTs: NFT[] = [];

    createNew(nft: NFT): void {
        NFTManagement.id++;
        nft.id = NFTManagement.id;
        NFTManagement.NFTs.push(nft);

    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < NFTManagement.NFTs.length; i++) {
            if (NFTManagement.NFTs[i].id == id) {
                index = i;
            }
        }
        return index
    }
    findByName(name: string):NFT | null{
        for (let nft of NFTManagement.NFTs) {
            if(name == nft.name){
                return  nft
                break
            }
        }
        return  null
    }

    getAll(): NFT[] {
        return NFTManagement.NFTs;
    }

    removeById(index: number): void {
        let indexRemove = this.findById(index);
        if (indexRemove !== -1) {
            NFTManagement.NFTs.splice(index, 1);
        }
    }
    // removeByName(name:string):void{
    //     let nameRemove = this.findByName(name);
    //     if( nameRemove !== name){
    //         NFTManagement.NFTs.splice(name,1)
    //     }


    updateById(index: number, nft: NFT): void {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            NFTManagement.NFTs[indexUpdate] = nft;
        }
    }
    findByNFTid(id:number){
        for (let i = 0; i < NFTManagement.NFTs.length; i++) {
            if(NFTManagement.NFTs[i].id == id){
                return NFTManagement.NFTs[i];
            }
        }
        return  null
    }

}