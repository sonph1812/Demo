import { User } from "./User";

export class NFT{
    private _name:string;
    private _description:string;
    private _id:number;
    private static count: number = 1
    private _ownBy: number
    private _createBy: number


    constructor(name: string, description: string,userId:number) {
        this._name = name;
        this._description = description;
        this._id= NFT.count;
        NFT.count++;
        this._ownBy = userId;
        this._createBy =userId;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get ownBy(): number {
        return this._ownBy;
    }

    set ownBy(value: number) {
        this._ownBy = value;
    }

    get createBy(): number {
        return this._createBy;
    }

    set createBy(value: number) {
        this._createBy = value;
    }
}