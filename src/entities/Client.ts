import { uuid } from "uuidv4";

export class Client {
    public readonly id: string;

    public name: string;
    public cpf: string;
    public email: string;
    public gender: string;

    constructor(props: Omit<Client, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }
}