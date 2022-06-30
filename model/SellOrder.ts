import { MarketPlace } from "./MarketPlace";
import { NFT } from "./NFT";

export class SellOrder {
    private _Price: number = 0
    private _marketplace: MarketPlace[] = [];

    constructor() {
    }


    get Price(): number {
        return this._Price;
    }

    set Price(value: number) {
        this._Price = value;
    }

    get marketplace(): MarketPlace[] {
        return this._marketplace;
    }

    set marketplace(value: MarketPlace[]) {
        this._marketplace = value;
    }

    add(t: MarketPlace): void {
        this._marketplace.push(t);

    }

    remove(i: number) {
        this._marketplace.splice(i, 1)
    }

    getTotal(): number {
        let total: number = 0;
        for (let Marketplace of this._marketplace) {
            total += (NFT.price)

        }
        return total

    }

    findBySellOrder(t: MarketPlace): boolean {
        let Marketplace = this._marketplace.includes(t);
        if (Marketplace) {
            return true;
        } else {
            return false;
        }
    }

    findByIndex(index: number) {
        return this._marketplace[index];
    }
}
