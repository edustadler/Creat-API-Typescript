import { response } from "express";
import { connection } from "../config/database";
import CrudData from "../models/crudModels";





export const readData = async (req: any, res: any) => {
    const response = res.status(200)
    const crudList = await CrudData.find()
    return (
        response.json(crudList)

    )
}

export const createData = async (req: any, res: any) => {
    const response = res.status(200)
    const { titulo, categoria, valor, favorito, tipo } = req.body

    if (!valor || !tipo) {
        return res.status(400).json({ error: 'Valor/Título necessário' })
    }
    const dataCreated = await CrudData.create({
        titulo,
        categoria,
        valor,
        favorito,
        tipo

    })

    return response.json(dataCreated)
}

export const deleteData = async (req: any, res: any) => {
    const response = res.status(200)
    const { id } = req.params
    const dataDeleted = await CrudData.findOneAndDelete({
        _id: id
    })

    try {
        return response.json(dataDeleted)
    } catch (error) {
        console.error(error)
    }
}

export const updateData = async (req: any, res: any) => {
    const response = res.status(200);
    const { id } = req.params;
    const { titulo, categoria, valor, favorito, tipo } = req.body;

    try {
        const updatedData = await CrudData.findByIdAndUpdate(
            {
                _id: id
            },
            {
                titulo,
                categoria,
                valor,
                favorito,
                tipo
            },
            { new: true });

        return response.json(updatedData);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'An error occurred during update' });
    }
}