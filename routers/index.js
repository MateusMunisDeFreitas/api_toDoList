import login from "./login.js";
import signUp from "./signUp.js";
import tarefas from "./tarefas.js";

export default (app) => {
    app.use(login);
    app.use(signUp);
    app.use(tarefas);
};