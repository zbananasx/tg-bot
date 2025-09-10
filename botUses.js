export function help (bot) {bot.help((ctx)=> {
    ctx.reply(`
        АХАХАХАХАХАХ, ебать ты дебил, на помощь зовешь, ладно вот тебе
        /start - повторить начало(сам хз нахуя, но пусть будет)
        /help - позорно звать на помощь ахахахах
        /buttons228 - кнопочки, но пока не тапалка
        /spy - шпионить жестко как чемпик
        /buttonsinline кнопочки попизже(тапалка тоже тут)
        `)})

    }
export function start(bot) {
bot.start((ctx) => {
    ctx.replyWithPhoto(
        {url:'image/me.jpg'},
        {
            caption: ` *Добро пожаловать, ${ctx.from.first_name}!*\n\n` +
                     ` Что умеет этот бот?\n` +
                     ` Основные функции:\n` +
                     `     круто тапать!\n` +
                     `  невероятно тапать!\n\n` +
                     `Выберите действие для начала: 👇`,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [
                       [{text: 'тапалка ебейшая228', web_app: {url: 'https://web-app-production-536a.up.railway.app/'}}],
                       [{text: 'чемпион жесткий', url: 'https://steamcommunity.com/profiles/76561199008763629/'}],
                       [{text: 'нуб нубовый', url: 'https://steamcommunity.com/id/IA_NE_PENDOS'}]
                    ],
                ]
            }
        }
    );
});
}

export function buttons (bot) {
    bot.command('buttons228', (ctx) => {
    ctx.reply('вот тебе и кнопочки адун балдун', {
        reply_markup: {
            keyboard: [
                [{text:'первая кнопка'}, {text: 'вторая кнопка?'}],
                [{text: 'третья кнопка'}],
                [{text: 'убрать клавиатуру'}],
            ],

        },
    });
});


}
export function spy (bot) {
    bot.command('spy', (ctx) => {
    ctx.reply('че подсматриваешь', {
});
})
}


export function firstButton(bot) {
    bot.hears('первая кнопка', (ctx) => {
    ctx.reply('и зачем ты на нее нажал?')
});
}

export function vtorayaButton(bot) {
    bot.hears('вторая кнопка?', (ctx) => {
    ctx.reply('хватит кнопки тыркать адун')
});
}

export function tretyaButton(bot) {
    bot.hears('третья кнопка', (ctx) => {
    ctx.reply('третья лишняя была, думаю')
});
}

export function removKeyboard(bot) {
    bot.hears('убрать клавиатуру', (ctx) => {
    ctx.reply('ладно уберу, козел', {
        reply_markup: {remove_keyboard: true},
    })
});
}

export function messagInBack(bot) {
    bot.on('text', (ctx)  => {
    ctx.reply(`соси, пиши ток то что есть или буду отвечать одно и тоже, козел`)
});
}
export function rickroll(bot) {
    bot.command('buttonsinline', (ctx) => {
        ctx.reply('не выбирай пж',  {
        reply_markup: {
            inline_keyboard: [
                [{text: 'точно не крутая кнопка', url: 'https://www.youtube.com/watch?v=oPLObjVAvIU'}],
                [{text: 'чемпион жесткий', url: 'https://steamcommunity.com/profiles/76561199008763629/'}],
                // [{text: 'нуб нубовый', url: 'https://steamcommunity.com/id/IA_NE_PENDOS'}]
                [{text: 'а вот и таплка', web_app: {url: 'https://web-app-production-536a.up.railway.app/'}}]
            ]
        }
    })
})
}
export function setMenu(bot) {
    bot.telegram.setMyCommands([
        {command: `help`, description: 'запросить подмоги'},
       {command: `buttonsinline`, description: 'тапалка тут'}
    ])
}