

import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class PostgresClientsRepository implements IClientsRepository {
  private static Clients: Client[] = [];

  async save(client: Client): Promise<void> {
    PostgresClientsRepository.Clients.push(client);
  }

  async get(): Promise<Client[]> {
    return PostgresClientsRepository.Clients;
  }
  async getById(clientId: string): Promise<Client> {
    let clientById: Client = PostgresClientsRepository.Clients.find((client) => client.id === clientId);
    return clientById;
  }

  async updateById(clientId: string, newClientValue: Client): Promise<void> {
    let clientIndex: number = PostgresClientsRepository.Clients.findIndex((client) => client.id === clientId);
    Object.assign(PostgresClientsRepository.Clients[clientIndex], newClientValue)
  }

  async deleteById(clientId: string) {
    let clientIndex: number = PostgresClientsRepository.Clients.findIndex((client) => client.id === clientId);
    PostgresClientsRepository.Clients.splice(clientIndex, 1);
  }
}