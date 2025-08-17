import { readFileSync,writeFileSync } from "fs";
import bot from "../../core/bot.js";

bot.start(ctx => {
    console.log("Start command ishladi, foydalanuvchi id:", ctx.from.id);
    const users = JSON.parse(readFileSync("src/database/data.json", { encoding: "utf-8" }));
    const user_id = String(ctx.from.id)
    const fullname = ctx.from.first_name
    let user = users['users'][user_id] // if not found = undefined
    if(user){
        ctx.reply("Siz bazada mavjudsiz botdan foydalanishingiz mumkin.")
    } else{
        users['users'][user_id] = {
            id: user_id,
            fullname: fullname,
            username: ctx.from.username
        }
        writeFileSync("src/database/data.json",JSON.stringify(users,null,2))
        ctx.reply("Tabriklayman siz bazaga muvaffaqiyatli qo'shildingiz.")
    }
    
});

export default bot;
