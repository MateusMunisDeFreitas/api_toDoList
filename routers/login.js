import { Router } from "express";
import usuariosController from "../controller/usuariosController.js";

const login = Router();
const user = usuariosController; 

login.get("/login", user.get);
login.post("/login", user.get_query);

export default login;