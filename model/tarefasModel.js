import conexao from "../dataBase/conexaoDB.js";
import router from "../routers/login.js";

class TarefaModel{
    execucao(sql, params = {}){
        return new Promise ((resolver, reject)=>{
            conexao.query(sql, params, (err, res)=>{
                if(err)return reject(err);
                resolver(res);
            });
        });
    }

    get(){
        const sql = `SELECT * FROM tarefas;`;
        return this.execucao(sql);
    }

    get_query(params){
        const sql = `SELECT * FROM tarefas WHERE user_id = ?`;
        return this.execucao(sql, params);
    }
    
    post(params){
        const sql = `INSERT INTO tarefas SET ?;`;
        return this.execucao(sql, params);
    }
    
    put(descricao, params){
        const sql = `UPDATE tarefas SET ? WHERE id = ?`;
        return this.execucao(sql, [params, descricao]);
    }

    delete(descricao){
        const sql = `DELETE FROM tarefas WHERE id = ?`;
        return this.execucao(sql, descricao);
    }
}
 
export default new TarefaModel();