import { IManagement } from "./i-management";
import { SellOder } from "../model/MarketPlace";

export class SellOrderManagement implements IManagement<SellOder>{
    createNew(t: SellOder): void {
    }

    findById(id: number): number {
        return 0;
    }

    getAll(): SellOder[] {
        return [];
    }

    removeById(id: number): void {
    }

    updateById(id: number, t: SellOder): void {
    }

}