import { IClientsRepository } from "../../repositories/IClientsRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";
import { Client } from '../../entities/Client';

export class CreateClientUseCase {
    constructor(private clientsRepository : IClientsRepository) {
        
    }
    async execute(data : ICreateClientRequestDTO) {
        // const clientAlreadyExists = await this.clientsRepository.findByCpfOrEmail(data.cpf);

        // if (clientAlreadyExists) {
        //     throw new Error('Cliente já cadastrado');
        // }

        const client = new Client(data);
        await this.clientsRepository.save(client);
    }
}