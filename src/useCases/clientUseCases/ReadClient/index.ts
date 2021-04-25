
import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";
import { ReadClientController } from "./ReadClientController";
import { ReadClientUseCase } from "./ReadClientUseCase";

const postgresClientsRepository = new PostgresClientsRepository();

const readClientUseCase = new ReadClientUseCase(
    postgresClientsRepository
);

const readClientController = new ReadClientController(
    readClientUseCase
);

export { readClientUseCase, readClientController }