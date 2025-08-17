import { Telegraf } from "telegraf";
import config from "../data/config.js";
import { connectDB } from "../database/connection.js";

const bot = new Telegraf(config.BOT_TOKEN);
connectDB();

bot.launch();
bot.telegram.sendMessage(config.SUPERADMIN,'✅ Bot ishga tushdi')

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

export default bot;