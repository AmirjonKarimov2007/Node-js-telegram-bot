import bot from "../core/bot.js";
const commands = [
  { command: 'start', description: 'Botni ishga tushirish' },
  { command: 'help', description: 'Yordam' },
];
bot.telegram.setMyCommands(commands);