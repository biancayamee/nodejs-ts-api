import { Client } from "../../../entities/Client";
import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";
import { IUpdateClientByIdRequestDTO } from "./UpdateClientByIdDTO";

export class UpdateClientByIdUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute(id: string, data: IUpdateClientByIdRequestDTO) {
        let newClientValue = new Client(data);
        return await this.postgresClientsRepository.updateById(id, newClientValue);
    }
}