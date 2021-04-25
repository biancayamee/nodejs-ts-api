import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";

export class ReadClientUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute() {
        return await this.postgresClientsRepository.get();
    }
}