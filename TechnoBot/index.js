const Commando = require('discord.js-commando');
const Client = new Commando.Client({
    commandPrefix: '.'
});
const Token = 'NDYxMzk3NzQ1MDAxOTU1MzI5.DoZ9RA.l_e5l6HnNRzThBDMm60kxE58L9Q'

Client.registry.registerGroup('nickname', 'Nickname');
Client.registry.registerDefaults();
Client.registry.registerCommandsIn(__dirname + '/commands');

Client.on('message', function(message){


});

Client.login(Token)


//if(message.author.id == "279130867886981120", "136290011124334592", "370108650993221643", "333843842782593024", "195787258010402816", "284933155725639680", "310135293254696970", "463625717259698187") {
 //   message.delete()
//}