import { Router } from "express";
import authenticator from '../middleware/authenticator.js';
import tarefasController from "../controller/tarefasController.js";

const tarefas = Router();

tarefas.get('/home/tarefas', authenticator, tarefasController.get);

tarefas.post('/home/tarefas', authenticator, tarefasController.post);

tarefas.put('/home/tarefas', authenticator, tarefasController.put);

tarefas.delete('/home/tarefas', authenticator, tarefasController.delete);

export default tarefas;