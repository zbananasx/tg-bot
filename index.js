import { Telegraf } from "telegraf";
import { token } from "./cfg.js";
import { help, messagInBack, removKeyboard, vtorayaButton, tretyaButton, spy, buttons, firstButton, rickroll, setMenu } from "./botUses.js";
const bot = new Telegraf(token.telegramToken, {});

// Обрабатываем команду /start
bot.start((ctx) => {
    ctx.reply(`Привет хуесос, ой, то есть ${ctx.from.first_name}, короче вот тебе кнопочки жамкай`, {
        reply_markup: {
            inline_keyboard: [
                [{text: 'тапалка ебейшая228', web_app: {url: 'https://web-app-production-536a.up.railway.app/'}}],
                [{text: 'чемпион жесткий', url: 'https://steamcommunity.com/profiles/76561199008763629/'}],
                [{text: 'нуб нубовый', url: 'https://steamcommunity.com/id/IA_NE_PENDOS'}]
            ]
        }
    }
        );
});
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