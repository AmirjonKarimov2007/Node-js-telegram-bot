import { readFileSync, writeFileSync } from "fs";
import bot from "../../core/bot.js";
import config from "../../data/config.js";

bot.help(ctx => {
    try {
        const users = JSON.parse(readFileSync("src/database/data.json", { encoding: "utf-8" }));
        const user_id = String(ctx.from.id)
        const fullname = ctx.from.first_name
        let user = users['users'][user_id] // if not found = undefined
        if (user) {
            ctx.reply("Botdan foydalanish uchun shunchaki /start buyrugini yuboring va ko'rsatilgan qoidalarga amal qiling.")
        } else {
            users['users'][user_id] = {
                id: user_id,
                fullname: fullname,
                username: ctx.from.username
            }
            writeFileSync("src/database/data.json", JSON.stringify(users, null, 2))
            ctx.reply("Botdan foydalanish uchun shunchaki /start buyrugini yuboring va ko'rsatilgan qoidalarga amal qiling.")
        };

    } catch (error) {
        ctx.telegram.sendMessage(config.SUPERADMIN, error)
    }
})
export default bot;
