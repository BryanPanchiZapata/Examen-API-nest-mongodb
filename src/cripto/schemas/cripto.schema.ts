import { Schema } from 'mongoose';

export const CriptoSchema = new Schema({
    nombre: String,
    alias: String,
    valor: Number,
    forma_minar: String,
    criptos : {
     nombre: String,
     valor: Number
    }

})