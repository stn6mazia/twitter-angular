import { User } from "./user";

export class Comment {
    id!:number;
    text: string = '';
    likes: number = 0;
    author!: User
    createdDate:any = new Date();

    [key: string]: any;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}