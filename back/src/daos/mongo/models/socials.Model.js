import { model, Schema } from "mongoose";

const socialCollection = 'socialmedias';

const socialSchema = new Schema({
    mediaName: { type: String, required: true },
    mediaImage: { type: String, required: true },
    mediaLink: { type: String, required: true }
})

const socialsModel = model(socialCollection, socialSchema);

export default socialsModel;