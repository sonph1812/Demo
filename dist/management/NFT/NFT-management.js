"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTManagement = void 0;
class NFTManagement {
    createNew(nft) {
        NFTManagement.id++;
        nft.id = NFTManagement.id;
        NFTManagement.NFTs.push(nft);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < NFTManagement.NFTs.length; i++) {
            if (NFTManagement.NFTs[i].id == id) {
                index = i;
            }
        }
        return index;
    }
    findByName(name) {
        for (let nft of NFTManagement.NFTs) {
            if (name == nft.name) {
                return nft;
                break;
            }
        }
        return null;
    }
    getAll() {
        return NFTManagement.NFTs;
    }
    removeById(index) {
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
    updateById(index, nft) {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            NFTManagement.NFTs[indexUpdate] = nft;
        }
    }
    findByNFTid(id) {
        for (let i = 0; i < NFTManagement.NFTs.length; i++) {
            if (NFTManagement.NFTs[i].id == id) {
                return NFTManagement.NFTs[i];
            }
        }
        return null;
    }
}
exports.NFTManagement = NFTManagement;
NFTManagement.id = 0;
NFTManagement.NFTs = [];
