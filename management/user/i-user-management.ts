import {IManagement} from "../i-management";
import {User} from "../../model/User";

export interface IUserManagement extends IManagement<User>{
    findByName(username:string):User;
    findByEmail(email:string):User;
    login(username:string,password:string):User;
}