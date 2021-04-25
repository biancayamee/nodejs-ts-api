
import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";
import { UpdateClientByIdController } from "./UpdateClientByIdController";
import { UpdateClientByIdUseCase } from "./UpdateClientByIdUseCase";

const postgresClientsRepository = new PostgresClientsRepository();

const updateClientByIdUseCase = new UpdateClientByIdUseCase(
    postgresClientsRepository
);

const updateClientByIdController = new UpdateClientByIdController(
    updateClientByIdUseCase
);

export { updateClientByIdUseCase, updateClientByIdController }