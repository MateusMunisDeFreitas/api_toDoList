import TarefasModel from '../model/tarefasModel.js';

const tarefas = TarefasModel; 

class TarefasController{
    async get(req, res){
        try{
            const response = await tarefas.get();
            if(!response[0]) return res.status(404).json({menssage:"Não existe tarefas"});
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async get_query(req, res){
        try{
            const {id} = req.query;
            const response = await tarefas.get_query(id);
            if(!response[0]) return res.status(404).json({menssage:"Não existe tarefas"});
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async post(req, res){
        try{
            const {descricao, user_id} = req.body;
            const response = await tarefas.post({descricao:descricao, user_id:user_id});
            res.status(201).json({menssage: "Criado com sucesso"});
        }catch(err){
            res.status(400);
            console.log("Falha na criacao: ",err);
        }
    }

    async put(req, res){
        try{
            const {id} = req.query;//O id é a descrição da tarefa
            const {descricao, user_id} = req.body;
            const response = await tarefas.put(id, {descricao:descricao, user_id:user_id});
            if(!response['affectedRows']) return res.status(404).json({menssage: "Tarefa não encontrada"});
            res.status(201).json({menssage: "Alterado com sucesso"});
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async delete(req, res){
        try{
            const {id} = req.query;//O id é a descrição da tarefa
            const response = await tarefas.delete(id);
            if(!response['affectedRows']) return res.status(404).json({menssage: "Tarefa não encontrada"});
            res.status(200).json({menssage: "Deletado com sucesso"});
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }
}

export default new TarefasController();