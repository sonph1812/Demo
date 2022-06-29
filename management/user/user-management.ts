import {IUserManagement} from "./i-user-management";
import {User} from "../../model/User";
import { Role } from "../../model/role";
import { SessionManagement } from "./session-management";

export class UserManagement implements IUserManagement {
    private static users: User[] = [];
    private static _id: number = 1;
    private static session: SessionManagement


    constructor() {
        let admin = new User('admin', 1,"son123", 'son', 'admin@gmail.com')
        admin.id = UserManagement._id;
        admin.role = Role.ADMIN;
        UserManagement.users.push(admin);
    }




    createNew(t: User): void {
        UserManagement._id++;
        t.id = UserManagement._id;
        t.role = Role.USER;
        UserManagement.users.push(t);
    }

    getAll(): User[] {
        return UserManagement.users;
    }

    removeById(id: number): void {
        let index = this.findById(id)
        if (index != -1) {
            UserManagement.users.splice(index, 1);
        }
    }

    findByUsername(userName: string): User | null {
        for (let user of UserManagement.users) {
            if (userName == user.email) {
                return user;
            }
        }
        return null
    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }


    login(username: string, password: string): User | null{
        for ( let user of  UserManagement.users){
            if(username == user.username && password == user.password){
                // UserManagement.session = new SessionManagement(user)
                return user;
            }
        }
        return null
    }

    updateById(id: number, t: User): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = t;
        }
    }
    // @ts-ignore
    findByEmail(email: string): User |null{
        for(let user of UserManagement.users){
            if (email == user.email){
                return user;
            }
        }
        return null;
    }

    static get id(): number {
        return this._id;
    }

    static set id(value: number) {
        this._id = value;
    }
}