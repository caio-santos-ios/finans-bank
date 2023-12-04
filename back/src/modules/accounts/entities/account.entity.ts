import { Exclude } from "class-transformer";

export class Account {
    readonly id: number;
    name: string;
    email: string;

    @Exclude()
    password: string;
    
    balance: string;
}
