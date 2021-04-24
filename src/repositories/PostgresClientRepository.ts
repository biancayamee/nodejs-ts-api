

import { Client } from "../entities/Client";
import { IClientsRepository } from "./IClientsRepository";

export class PostgresClientsRepository implements IClientsRepository {
  private Clients: Client[] = [];

  async save(Client: Client): Promise<void> {
    this.Clients.push(Client);
  }
}