import { NFT } from "./NFT";

export class MarketPlace {
    private _totalMoney: number = 0
    private _arrNFT: NFT[] = [];
    _id?: number;

    constructor(name: string, description: string,id?:number) {
    }

    get totalMoney(): number {
        return this._totalMoney;
    }

    set totalMoney(value: number) {
        this._totalMoney = value;
    }

    get arrNFT(): NFT[] {
        return this._arrNFT;
    }

    set arrNFT(value: NFT[]) {
        this._arrNFT = value;
    }

    add(t: MarketPlace): void {
        // @ts-ignore
        this._arrNFT.push(t);
    }

    remove(i: number): void {
        this._arrNFT.splice(i, 1);
    }

}

