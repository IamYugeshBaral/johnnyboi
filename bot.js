const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login('NDc4MDA2NDQ2Mjc4MTgwODc2.DpZYDw.QhZ-9f8xj54yAclVxwe-OMIUJ7w');

Bot.on('message', (message) => {
   if(message.author.id == 427623796456030208) return;
  
   if(message.content == "!verifyhelp") {
     message.reply('be sure to check out #welcome to learn how to verify!')
   };
});
