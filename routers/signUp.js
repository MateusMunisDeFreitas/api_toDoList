import usuariosController from "../controller/usuariosController.js";
import { Router } from "express";

const signUp = Router();

const user = usuariosController;

signUp.post('/signup', user.post);

export default signUp;