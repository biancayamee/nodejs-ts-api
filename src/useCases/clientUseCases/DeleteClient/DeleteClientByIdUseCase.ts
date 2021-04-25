import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";

export class DeleteClientByIdUseCase {
    constructor(private postgresClientsRepository: PostgresClientsRepository) {

    }
    async execute(id: string) {
        return await this.postgresClientsRepository.deleteById(id);
    }
}