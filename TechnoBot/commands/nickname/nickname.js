const commando = require('discord.js-commando')

class Nickname extends commando.Command
{
    constructor(Client)
    {
        super(Client,{
            name: 'nick',
            group: 'nickname',
            memberName: 'nick',
            description: 'Changes a users nickname and gives them a role'
        })
    }

    async run(message, args){
        message.member.setNickname(args).catch(console.error);
        message.reply('test')
        }
}

module.exports = Nickname;