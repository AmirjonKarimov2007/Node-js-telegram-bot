import { readFileSync, writeFileSync } from "fs";
import bot from "../../core/bot.js";
import config from "../../data/config.js";

bot.on('message', (ctx) => {
  ctx.copyMessage(ctx.chat.id);
});


export default bot;
