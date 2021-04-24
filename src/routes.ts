import { Router } from "express";
import { createClientController } from "./useCases/CreateClient";

const router = Router(
)

router.post('/clients', (request, response) => {
    return createClientController.handle(request, response);
})

export { router }