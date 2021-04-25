import express from 'express';
import { clientsRouter } from './routes/clientsRoutes'
import { productsRouter } from './routes/productsRoutes';

const app = express()

app.use(express.json())
app.use(clientsRouter, productsRouter)

export { app }