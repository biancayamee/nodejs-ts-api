
import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";
import { CreateClientController } from "./CreateClientController";
import { CreateClientUseCase } from "./CreateClientUseCase";

const postgresClientsRepository = new PostgresClientsRepository();

const createClientUseCase = new CreateClientUseCase(
    postgresClientsRepository
);

const createClientController = new CreateClientController(
    createClientUseCase
);

export { createClientUseCase, createClientController }