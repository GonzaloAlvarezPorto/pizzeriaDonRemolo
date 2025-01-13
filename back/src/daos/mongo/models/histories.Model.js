import { model, Schema } from "mongoose";

const historyCollection = 'histories';

const historySchema = new Schema({
    "paragraph": { type: String, required: true },
    "order": { type: Number, required: true, unique: true },
    "image": {type: String}
});

const historiesModel = model(historyCollection, historySchema);

export default historiesModel;