import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI); // Verifica que la URI se esté cargando correctamente
        
        const connect = await mongoose.connect(process.env.MONGO_URI, {});
        console.log('Conexión a MongoDB exitosa');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;