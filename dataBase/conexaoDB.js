import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'to_do_list',
    port:'3306'
});

export default conexao;