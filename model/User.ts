import { MarketPlace } from "./MarketPlace";
import { SellOrder } from "./SellOrder";

export class User {
    private _name: string;
    private _id: number;
    private _password: string;
    private _username: string;
    private _email: string;
    private _role: number = 0;
    private sellOrder = new SellOrder();

    constructor(name: string, id: number, password: string, username: string, email: string) {
        this._name = name;
        this._id = id;
        this._password = password;
        this._username = username;
        this._email = email;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    addToSellOrder(t: MarketPlace) {
        this.sellOrder.add(t);
    }

    getSellOrder(): number {
        return this.sellOrder.getTotal()
    }

    findToSellOrder(index: number): MarketPlace | null {
        let Marketplace = this.sellOrder.findByIndex(index)
        if (Marketplace) {
            // @ts-ignore
            return MarketPlace
        } else {
            return null
        }

    }
    findBySellOrder(){
        // @ts-ignore
        let marketplace = this.sellOrder.findBySellOrder(t)
        if(marketplace){
            return true
        }else {
            return  false
        }
    }

}

