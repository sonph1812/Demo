import {INFTManagement} from "./i-NFT-management";
import {NFT} from "../../model/NFT";

export class NFTManagement implements INFTManagement{
    private static id:number=0;
    private static NFTs:NFT[]=[];
     createNew(t: NFT):void {
         NFTManagement.id++;
         t.id = NFTManagement.id;
         NFTManagement.NFTs.push(t);
     }
     findById(id: number): number {
         return 0;
     }
     getAll(): NFT[] {
         return NFTManagement.NFTs;

     }
     removeById(id: number) :void{
     }
     updateById(id: number, t: NFT):void {
     }

}


