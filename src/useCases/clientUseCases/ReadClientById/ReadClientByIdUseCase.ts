import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";

export class ReadClientByIdUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute(id: string) {
        return await this.postgresClientsRepository.getById(id);
    }
}