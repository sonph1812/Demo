import { User } from "../../model/User";
import { UserManagement } from "./user-management";

export  class SessionManagement {
    private _user: User;

    constructor(user: User) {
        this._user = user ;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
    getUserId(){
        return this.user.id
    }
}