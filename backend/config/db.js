import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}