import express from 'express';
import { clientsRouter } from './routes/clientsRoutes'
import { productsRouter } from './routes/productsRoutes';

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(clientsRouter, productsRouter)

export { app }