import { Router } from "express";
import { createClientController } from "./useCases/clientUseCases/CreateClient";
import { readClientController } from "./useCases/clientUseCases/ReadClient";
import { readClientByIdController } from "./useCases/clientUseCases/ReadClientById";
import { updateClientByIdController } from "./useCases/clientUseCases/UpdateClientById";

const router = Router(
)

router.get('/clients', (request, response) => {
    return readClientController.handle(request, response);
});
router.get('/clients/:id', (request, response) => {
    return readClientByIdController.handle(request, response);
});

router.post('/clients', (request, response) => {
    return createClientController.handle(request, response);
})

router.put('/clients/:id', (request, response) => {
    return updateClientByIdController.handle(request, response);
})

export { router }