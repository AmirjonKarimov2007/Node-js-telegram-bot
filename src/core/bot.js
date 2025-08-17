import { Telegraf } from "telegraf";
import config from "../data/config.js";

const bot  = new Telegraf(config.BOT_TOKEN);

bot.launch().then(()=>{
    console.log("Bot ishga tushdi")
});

export default bot;