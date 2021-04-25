import { PostgresClientsRepository } from "../../../repositories/PostgresClientRepository";

export class ReadClientByIdUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute(id: string) {
        return await this.postgresClientsRepository.getById(id);
    }
}