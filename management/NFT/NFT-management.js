"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTManagement = void 0;
class NFTManagement {
    createNew(t, NFT) {
        NFTManagement.id++;
        t.id = NFTManagement.id;
        NFTManagement.NFTs.push(t);
    }
    findById(id) {
        return 0;
    }
    getAll() {
        return NFTManagement.NFTs;
    }
    removeById(id) {
    }
    updateById(id, t) {
    }
}
exports.NFTManagement = NFTManagement;
NFTManagement.id = 0;
NFTManagement.NFTs = [];
