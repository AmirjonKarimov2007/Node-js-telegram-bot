import { readFileSync, writeFileSync } from "fs";
import bot from "../../core/bot.js";
import config from "../../data/config.js";
import { main_menu_for_super_admin } from "../../keyboards/inline/superAdminKeyboards.js";
import User from "../../database/models/users.model.js";
function isSuperAdmin(ctx, next) {
  if (String(ctx.from.id) === config.SUPERADMIN) {
    return next();
  }
}

bot.start(isSuperAdmin,async ctx => {
    try {
        const user_id = +ctx.from.id
        const fullname = `${ctx.from.first_name}`
        const user = await User.findOne({ user_id: user_id });
        if (!user) {
            await User.create({
                user_id: user_id,
                firstname: fullname,
                username: `@${ctx.from?.username}`,
                is_premium: ctx.from?.is_premium,
                is_blocked: false
            });

        };
        if (user_id == config.SUPERADMIN) {
            return ctx.replyWithHTML(
                `<b>Assalomu Aleykum Bosh Admin <a href='tg://user?id=${user_id}'>${fullname}</a>!</b>`,
                main_menu_for_super_admin
            );
        }

        // let user = users['users'][user_id]
        // if (user) {
        //     ctx.replyWithHTML(`<b>Assalomu Aleykum <i>${fullname}!</i> Botimizga xush kelipsiz.</b>`)
        // } else {
        //     users['users'][user_id] = {
        //         id: user_id,
        //         fullname: fullname,
        //         username: ctx.from.username
        //     }
        //     writeFileSync("src/database/data.json", JSON.stringify(users, null, 2))
        //     ctx.replyWithHTML(`<b>Assalomu Aleykum ${fullname}! Botimizga xush kelipsiz.</b>`)
        // }
    } catch (error) {
        ctx.telegram.sendMessage(config.SUPERADMIN, error)
    };
});

export default bot;
