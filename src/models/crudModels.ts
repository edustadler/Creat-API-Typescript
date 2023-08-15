import { connection } from "../config/database";
import mongoose, { Schema, Document } from "mongoose";

interface ICrudData extends Document {
    titulo: string;
    categoria: string;
    valor: number;
    favorite: boolean;
    tipo: "Entrada" | "Saída";
    data: Date;
}

const crudDataSchema: Schema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    valor: {
        type: Number,
        required: true
    },
    favorite: Boolean,
    tipo: {
        type: String,
        enum: ["Entrada", "Saída"],
    },
    data: {
        type: Date,
        default: Date.now,
    },
});

const CrudData = connection.model<ICrudData>("crud", crudDataSchema);

export default CrudData;
