import conexao  from "../dataBase/conexaoDB.js"

class UsuariosModel{
    execucao(sql, params = {}){
        return new Promise((resolver, reject)=>{ 
            conexao.query(sql, params, (err, res)=>{
                if(err) return reject(err);
                resolver(res);
            }); 
        });
    }
    //Model tabela usuario 
    get(nome){
        const sql = `SELECT * FROM usuarios WHERE nome = ?`;
        return this.execucao(sql, nome);//Id é o nome do usuario
    }

    get_query(params){
        const sql = `SELECT * FROM usuarios WHERE nome = ? AND senha = ?;`
        return this.execucao(sql, [params.nome, params.senha]);
    }

    post(params){
        const sql = `INSERT INTO usuarios SET ?`;
        return this.execucao(sql, params);
    }

    put(nome, params){
        const sql = `UPDATE usuarios SET ? WHERE nome = ?`;
        return this.execucao(sql, [params, nome]);
    }

    delete(nome){
        const sql = `DELETE FROM usuarios WHERE nome = ?`;
        return this.execucao(sql, nome);
    }
}

export default new UsuariosModel();