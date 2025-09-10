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
    bot.start('Привет хуесос, ой, то есть ${ctx.from.first_name}, короче вот тебе кнопочки жамкай', async (ctx) => {
    try {
        // Отправляем картинку с подписью
        await ctx.replyWithPhoto(
            { source: './image/me.jpg' }, // Локальный файл
            {
                caption: `
*🤖 WHAT CAN THIS BOT DO?* ✨

фармить

*⚡ Популярные команды:*
• /start - Запустить бота
• /search - Поиск информации  
• /settings - Настройки
• /help - Помощь

_Выберите категорию для подробностей:_
                `,
                parse_mode: 'Markdown',
                ...Markup.inlineKeyboard([
                    [
                        Markup.button.callback('🔍 Поиск', 'help_search'),
                        Markup.button.callback('📊 Аналитика', 'help_stats')
                    ],
                    [
                        Markup.button.callback('⚙️ Настройки', 'help_settings'),
                        Markup.button.callback('📁 Файлы', 'help_files')
                    ]
                ])
            }
        );
    } catch (error) {
        // Если картинка не загрузилась, отправляем текстовую версию
        await ctx.replyWithMarkdown(`
*🤖 WHAT CAN THIS BOT DO?* ✨

*🔍 Основные функции:*
✅ Быстрый поиск информации
✅ Умные уведомления  
✅ Подробная аналитика
✅ Работа с файлами

*⚡ Популярные команды:*
• /start - Запустить бота
• /search - Поиск информации
• /settings - Настройки
• /help - Помощь
        `);
    }
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