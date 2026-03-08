import { use } from 'react';
import TarefasModel from '../model/tarefasModel.js';

const tarefas = TarefasModel;

class TarefasController{
    async get(req, res){
        try{
            const response = await tarefas.get();
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async post(req, res){
        try{
            const {descricao, user_id} = req.body;
            const response = await tarefas.post({"descricao":descricao, "user_id":user_id});
            res.status(201).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async put(req, res){
        try{
            const {id} = req.params.id;
            const {descricao, user_id} = req.body;
            const response = await tarefas.put(id, {"descricao":descricao, "user_id":user_id});
            res.status(201).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params.id;
            const response = await tarefas.delete(id);
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }
}