export function help (bot) {bot.help((ctx)=> {
    ctx.reply(`
        вот список команд которые имеются на данный момент
        /start - повторить начало
        /help - узнать список команд
        /buttons228 - обычные кнопки(сам кликер в buttonin)
        /spy - обычная кнопка без какого либо смысла
        /buttonsinline ссылки и приложение
        `)})

    }
export function start(bot) {
    bot.start((ctx) => {
    ctx.reply(`Приветствую ${ctx.from.first_name} в своем боте, тут можно найти мой кликер(и возможно больше проектов в будующем)`, {
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
}

export function buttons (bot) {
    bot.command('buttons228', (ctx) => {
    ctx.reply('вот тебе и кнопочки', {
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
    ctx.reply('не подсматривай', {
});
})
}


export function firstButton(bot) {
    bot.hears('первая кнопка', (ctx) => {
    ctx.reply('и зачем ты на нее нажал(а)?')
});
}

export function vtorayaButton(bot) {
    bot.hears('вторая кнопка?', (ctx) => {
    ctx.reply('хватит кнопки тыркать')
});
}

export function tretyaButton(bot) {
    bot.hears('третья кнопка', (ctx) => {
    ctx.reply('думаю, третьей кнопки здесь и не должно быть')
});
}

export function removKeyboard(bot) {
    bot.hears('убрать клавиатуру', (ctx) => {
    ctx.reply('ладно, уберу', {
        reply_markup: {remove_keyboard: true},
    })
});
}

export function messagInBack(bot) {
    bot.on('text', (ctx)  => {
    ctx.reply(`прошу писать только то, что имеется во вкладке /help`)
});
}
export function rickroll(bot) {
    bot.command('buttonsinline', (ctx) => {
        ctx.reply('тут находится сам мини апп и 2 ссылки',  {
        reply_markup: {
            inline_keyboard: [
                [{text: 'рикролл', url: 'https://www.youtube.com/watch?v=oPLObjVAvIU'}],
                [{text: 'мой стим', url: 'https://steamcommunity.com/profiles/76561199008763629/'}],
                // [{text: 'нуб нубовый', url: 'https://steamcommunity.com/id/IA_NE_PENDOS'}]
                [{text: 'а вот и таплка', web_app: {url: 'https://web-app-production-536a.up.railway.app/'}}]
            ]
        }
    })
})
}
export function setMenu(bot) {
    bot.telegram.setMyCommands([
        {command: `start`, description: `начать ознакомление`},
        {command: `help`, description: 'узнать список команд'},
       {command: `buttonsinline`, description: 'ссылки и кликер'},
       {command: `buttons228`, description: 'Обычные кнопки'},
       {command: `spy`, description: 'Секретная команда'}
    ])
}