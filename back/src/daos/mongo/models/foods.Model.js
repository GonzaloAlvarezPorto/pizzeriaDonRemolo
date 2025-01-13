import { model, Schema } from "mongoose";

const foodCollection = 'foods';

const foodSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imagen: { type: String, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, required: true },
    novedad: { type: Boolean, default: true }
})

const foodsModel = model(foodCollection, foodSchema);

export default foodsModel;