export class Session {
    login: string = '';
    password: string = '';
    token: string = '';

    [key: string]: any;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}