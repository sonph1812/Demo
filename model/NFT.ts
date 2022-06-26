export class NFT{
    private _name:string;
    private _price:string;
    private _id:number;
    private static count: number = 1


    constructor(name: string, price: string) {
        this._name = name;
        this._price = price;
        this._id= NFT.count;
        NFT.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}