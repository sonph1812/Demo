export class NFT{
    private _name:string;
    private _type:number=0;
    private _price:string;
    private _id:number= 0;


    constructor(name: string, price: string) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): number {
        return this._type;
    }

    set type(value: number) {
        this._type = value;
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