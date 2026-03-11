import UsuariosModel from '../model/usuariosModel.js'
import jwt from 'jsonwebtoken';

const user = UsuariosModel;

class UsuariosController{
    async get(req, res){
        try{
            const response = await user.get();
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }
    // Rota para Login
    async get_query(req, res){
        try{
            const {nome, senha} = req.body;
            const response = await user.get_query({nome:nome, senha:senha});
            if(!response[0]) return res.status(404).json({menssage: "Usuario não encontrado"});
            const token = jwt.sign({user: nome}, process.env.SECRET_KEY, {expiresIn: "1h"});
            res.status(200).json({menssage: token, user_id:response[0].id});
        }catch(err){
            res.status(404);
            console.log(err);
        }
    }

    async post(req, res){
        try{
            const {nome, senha} = req.body;
            const response_1 = await user.get(nome);
            if(response_1[0]) return res.status(401).json({menssage: "Usuario já existe"});

            const response_2 = await user.post({nome:nome, senha:senha});
            res.status(201).json({menssage: "Criado com sucesso"});
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async put(req, res){
        try{
            const {id} = req.query;
            const {nome, senha} = req.body;
            const response = await user.put(id, {nome:nome, senha:senha});
            if(!response['affectedRows']) return res.status(404).json({menssage: "Usuario não encontrada"});
            res.status(201).json({menssage: "Alterado com sucesso"});
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async delete(req, res){
        try{
            const {id} = req.query;
            const response = await user.delete(id);
            if(!response['affectedRows']) return res.status(404).json({menssage: "Usuario não encontrada"});
            res.status(200).json({menssage: "Deletado com sucesso"});
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }
}

export default new UsuariosController();