import { PostgresClientsRepository } from "../../../repositories/PostgresClientRepository";

export class ReadClientUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute() {
        return await this.postgresClientsRepository.get();
    }
}