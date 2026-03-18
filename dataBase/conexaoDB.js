import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host:'metro.proxy.rlwy.net',/** mysql://root:tWbCrWnGyjcgaATtRqwIzqznGoNTLEcD@metro.proxy.rlwy.net:16945/railway */
    user:'root',
    password:'tWbCrWnGyjcgaATtRqwIzqznGoNTLEcD',
    database:'railway',
    port:'16945'
});

export default conexao;