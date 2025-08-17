import { config } from "dotenv";

config();

export default {
    BOT_TOKEN: process.env.BOT_TOKEN,
    SUPERADMIN: process.env.SUPERADMIN,
    MONGO_URL:process.env.MONGO_URL
}