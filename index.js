import { Telegraf } from "telegraf";
import { token } from "./cfg.js";
import { help, messagInBack, removKeyboard, vtorayaButton, tretyaButton, spy, buttons, firstButton, rickroll, setMenu } from "./botUses.js";
const bot = new Telegraf(token.telegramToken, {});
// Обрабатываем команду /start
start(bot)
setMenu(bot)
help(bot)
rickroll(bot)
buttons(bot)
spy(bot)
firstButton(bot)
vtorayaButton(bot)
tretyaButton(bot)
removKeyboard(bot)
messagInBack(bot)
bot.launch();

process.once(`SIGINT`, () => bot.stop(`SIGINT`));
process.once(`SIGTERM`, () => bot.stop(`SIGTERM`));

console.log(`Выпускайте кракена`);