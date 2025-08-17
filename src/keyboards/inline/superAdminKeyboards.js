import { Markup, Telegraf } from "telegraf";

export const main_menu_for_super_admin = Markup.inlineKeyboard(
  [
    [Markup.button.callback("➕ Kanal Qo'shish", "add_channel"), Markup.button.callback("➖ Kanal o'chirish", "del_channel")],
    [Markup.button.callback("➕ Admin Qo'shish", "add_admin"), Markup.button.callback("➖ Admin O'chirish", "del_admin")],
    [Markup.button.callback("👤 Adminlar","admins"),Markup.button.callback("📝 Adminlarga Xabar yuborish","send_message_to_admins")],
    [Markup.button.callback("📝 Reklama Jo'natish","send_advertisement"),Markup.button.callback("📊 Statistika","statistics")]
  ],
  { columns: 2 }
);

