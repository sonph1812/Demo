enum status {
    Cancel,
    Complete,
    Confirm

}
export class SellOder {
    private _status: number = 1;
    private _price: number;
    private _createTime: number;

    constructor(status: number, price: number, createTime: number) {
        this._status = status;
        this._price = price;
        this._createTime = createTime;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get createTime(): number {
        return this._createTime;
    }

    set createTime(value: number) {
        this._createTime = value;
    }
}

