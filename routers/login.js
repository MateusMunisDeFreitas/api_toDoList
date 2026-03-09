import { Router } from "express";
import usuariosController from "../controller/usuariosController.js";

const login = Router();
const user = usuariosController;

login.post("/login", user.get_query);

export default login;