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
    
    post(params){
        const sql = `INSERT INTO tarefas SET ?;`;
        return this.execucao(sql, params);
    }
    
    put(descricao, params){
        const sql = `UPDATE tarefas SET ? WHERE descricao = ?`;
        return this.execucao(sql, [params, descricao]);
    }

    delete(descricao){
        const sql = `DELETE tarefas WHERE descricao = ?`;
        return this.execucao(sql, descricao);
    }
}
 
export default new TarefaModel();