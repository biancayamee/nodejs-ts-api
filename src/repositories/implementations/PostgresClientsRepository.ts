

import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class PostgresClientsRepository implements IClientsRepository {
  private static Clients: Client[] = [];

  async save(Client: Client): Promise<void> {
    PostgresClientsRepository.Clients.push(Client);
  }

  async get(): Promise<Client[]> {
    return PostgresClientsRepository.Clients;
  }
  async getById(id: string): Promise<Client> {
    let clientById: Client = PostgresClientsRepository.Clients.find((client) => client.id === id);
    return clientById;
  }
}