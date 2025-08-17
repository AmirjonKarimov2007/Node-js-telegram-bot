import { connect } from "mongoose";
import config from "../data/config.js";

export const connectDB = async () => {
    try {
        await connect(config.MONGO_URL);
        console.log('✅Database connected successfully');
    } catch (error) {
        console.log(`Error on connecting to database: ${error}`);
    }
}