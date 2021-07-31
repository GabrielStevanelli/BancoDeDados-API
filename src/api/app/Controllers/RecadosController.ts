import {Request,Response} from "express";
import {getRepository} from "typeorm";
import {recados} from "../entities/recados";

const {uuid} = require("uuidv4")

export const getRecados = async (req:Request, res:Response): Promise<Response> => {
    const recado = await getRepository(recados).find();
    return res.json(recado);
}

export const postRecados = async (req:Request, res:Response): Promise<Response> => {
  const id = uuid()
  const {title,message} = req.body
  const novo = {id,title,message}
  const novoRecado =  getRepository(recados).create(novo);
  const salvar = await getRepository(recados).save(novoRecado);
  return res.json(salvar)
}

export const putRecados = async (req:Request, res:Response): Promise<Response> => {
     const recado = await getRepository(recados).findOne(req.params.id);
     if (recado){
        getRepository(recados).merge(recado, req.body);

        const resultado = await getRepository(recados).save(recado);
        return res.json(recado);
     }
     return res.status(404).json({msg:'recado não encontrado'})
}

export const deleteRecados = async (req:Request, res:Response): Promise<Response> => {
    const apaga = await getRepository(recados).delete(req.params.id);
    return res.json(apaga);
}


