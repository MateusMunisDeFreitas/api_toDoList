import express from 'express';
import dotenv from 'dotenv';
import index from './routers/index.js'
import tabelas from './dataBase/tabelas.js';
import cors from 'cors';

//const PORT = 3000;
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
tabelas.init();
index(app);

app.get('/',(req, res)=>{
    res.send("Helo word");
})

app.listen(process.env.PORT, ()=>console.log("Servidor rodando PORT ", process.env.PORT));