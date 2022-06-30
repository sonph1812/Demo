import { MarketPlace } from "../model/MarketPlace";

export class MarketplaceManagement {
    public static arr: MarketPlace[] = [];
    private static id: number = 0;

    constructor() {
        MarketplaceManagement.arr.push(new MarketPlace("Dragon", "Monster"))
    }

    getAll() {
        return MarketplaceManagement.arr;
    }

    add(t: MarketPlace): void {
        MarketplaceManagement.id++;
        t._id = MarketplaceManagement.id
    }

    remove(id: number) {
        for (let i = 0; i < MarketplaceManagement.arr.length; i++) {
            if (id == MarketplaceManagement.arr[i]._id) {
                MarketplaceManagement.arr.splice(i, 1)
            }

        }
    }

}
