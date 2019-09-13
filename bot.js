const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjIxNTYyNzk4NTk3NzM0NDA1.XXroXg.54Jre2NU02U6FxDV1AJF5gzQzuY);//BOT_TOKEN is the Client Secret
