import { Client } from "../entities/Client";

export interface IClientsRepository {
    save(client: Client): Promise<void>
    get(): Promise<Client[]>
    getById(id: string): Promise<Client>
    updateById(clientId: string, newValue: Client): Promise<void>
}