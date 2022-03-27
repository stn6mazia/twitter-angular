export class User {
    name: string  = '';
    email: string = '';
    password: string = '';
    login: string = '';

    [key: string]: any;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}