import conexao from "./conexaoDB.js";

class Tabelas{
    init(){
        this.conexao = conexao;
        this.createTable();
    }

    createTable(){
        const sql_user = `CREATE TABLE IF NOT EXISTS usuarios(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255), senha VARCHAR(255));`;

        const sql_description = `CREATE TABLE IF NOT EXISTS tarefas(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        descricao VARCHAR(255), user_id INT NOT NULL, CONSTRAINT fk_usuarios_tarefas FOREIGN KEY (user_id) 
        REFERENCES usuarios(id) ON DELETE CASCADE);`;

        this.conexao.query(sql_user, {}, (err, res)=>{
            if(err) return console.log(err);
            console.log("Criado tabela USUARIO");
        })

        this.conexao.query(sql_description, {}, (err, res)=>{
            if(err) return console.log(err);
            console.log("Criado tabela DESCRICAO");
        })
    }
}

export default new Tabelas();