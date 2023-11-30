import mongoose from 'mongoose';

import fs from "fs";
import productModel from '../models/product.model.js';

const productsData = fs.readFileSync('./src/productos.json', 'utf-8');
const products = JSON.parse(productsData);

const URI = 'mongodb+srv://developer:gVv8zVirk3lZbGYq@cluster0.0ewcbcb.mongodb.net/ferreteria?retryWrites=true&w=majority'

// const insertData = async () =>{
//     await  productModel.insertMany(products);
//     const result = await productModel.find({});
//     console.log('result', result);
// }

 export const inicializar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("BD conectada correctamente ✔");
        // await insertData();
    } catch (error) {
        console.error('Ah ocurrido un error al intentar conectarse a la DB ✖');
        console.error(error);
    }
}