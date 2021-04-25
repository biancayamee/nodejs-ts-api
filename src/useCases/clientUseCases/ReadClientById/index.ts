
import { PostgresClientsRepository } from "../../../repositories/PostgresClientRepository";
import { ReadClientByIdController } from "./ReadClientByIdController";
import { ReadClientByIdUseCase } from "./ReadClientByIdUseCase";

const postgresClientsRepository = new PostgresClientsRepository();

const readClientByIdUseCase = new ReadClientByIdUseCase(
    postgresClientsRepository
);

const readClientByIdController = new ReadClientByIdController(
    readClientByIdUseCase
);

export { readClientByIdUseCase, readClientByIdController }