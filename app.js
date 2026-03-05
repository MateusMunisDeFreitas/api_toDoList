import express from 'express';
import dotenv from 'dotenv';
import index from './routers/index.js'

//const PORT = 3000;
dotenv.config();
const app = express();

app.use(express.json());
index(app);

app.get('/',(req, res)=>{
    res.send("Helo word");
})

app.listen(process.env.PORT, ()=>console.log("Servidor rodando PORT ", process.env.PORT));