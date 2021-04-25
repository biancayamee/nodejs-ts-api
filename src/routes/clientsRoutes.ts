import { Router } from "express";
import { createClientController } from "../useCases/clientUseCases/CreateClient";
import { deleteClientByIdController } from "../useCases/clientUseCases/DeleteClient";
import { readClientController } from "../useCases/clientUseCases/ReadClient";
import { readClientByIdController } from "../useCases/clientUseCases/ReadClientById";
import { updateClientByIdController } from "../useCases/clientUseCases/UpdateClientById";

const clientsRouter = Router(
)

clientsRouter.get('/clients', (request, response) => {
    return readClientController.handle(request, response);
});
clientsRouter.get('/clients/:id', (request, response) => {
    return readClientByIdController.handle(request, response);
});

clientsRouter.post('/clients', (request, response) => {
    return createClientController.handle(request, response);
})

clientsRouter.put('/clients/:id', (request, response) => {
    return updateClientByIdController.handle(request, response);
})

clientsRouter.delete('/clients/:id', (request, response) => {
    return deleteClientByIdController.handle(request, response);
})

export { clientsRouter }