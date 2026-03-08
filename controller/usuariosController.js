import UsuariosModel from '../model/usuariosModel.js'

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

    async post(req, res){
        try{
            const {nome, senha} = req.body;
            const response = await user.post({"nome":nome, "senha":senha});
            res.status(201).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async put(req, res){
        try{
            const {id} = req.params.id;
            const {nome, senha} = req.body;
            const response = await user.put(id, {"nome":nome, "senha":senha});
            res.status(201).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }

    async delete(req, res){
        try{
            const {id} = req.params.id;
            const response = await user.delete(id);
            res.status(200).json(response);
        }catch(err){
            res.status(400);
            console.log(err);
        }
    }
}

export default new UsuariosController();