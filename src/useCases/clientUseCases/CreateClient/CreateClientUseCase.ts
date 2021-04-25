import { IClientsRepository } from "../../../repositories/IClientsRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";
import { Client } from '../../../entities/Client';

export class CreateClientUseCase {
    constructor(private clientsRepository: IClientsRepository) {
    }
    async execute(data: ICreateClientRequestDTO) {
        const client = new Client(data);
        await this.clientsRepository.save(client);
    }
}