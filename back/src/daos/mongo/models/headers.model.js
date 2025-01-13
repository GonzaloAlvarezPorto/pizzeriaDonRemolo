import { model, Schema } from "mongoose";

const headersCollection = 'headers';

const headersSchema = new Schema({
    name: {type: String, required: true},
    link: {type: String, required: true}
})

const headersModel = model(headersCollection, headersSchema);

export default headersModel;