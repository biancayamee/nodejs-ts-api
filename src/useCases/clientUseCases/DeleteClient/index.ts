
import { PostgresClientsRepository } from "../../../repositories/implementations/PostgresClientsRepository";
import { DeleteClientByIdController } from "./DeleteClientByIdController";
import { DeleteClientByIdUseCase } from "./DeleteClientByIdUseCase";

const postgresClientsRepository = new PostgresClientsRepository();

const deleteClientByIdUseCase = new DeleteClientByIdUseCase(
    postgresClientsRepository
);

const deleteClientByIdController = new DeleteClientByIdController(
    deleteClientByIdUseCase
);

export { deleteClientByIdUseCase, deleteClientByIdController }