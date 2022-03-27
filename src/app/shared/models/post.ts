import { Comment } from "./comment";
import { User } from "./user";

export class Post {
    id!: number;
    textPost: string = '';
    author!: User;
    createdDate: any = new Date();
    status: boolean = true;
    likes:number = 0;
    comments: Comment[] = [];
    publishedMoment:string = '';

    [key: string]: any;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}