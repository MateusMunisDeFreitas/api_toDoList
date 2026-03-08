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
    get(){
        const sql = `SELECT * FROM usuarios`;
        return this.execucao(sql);
    }

    post(params){
        const sql = `INSERT INTO usuarioS SET ?`;
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