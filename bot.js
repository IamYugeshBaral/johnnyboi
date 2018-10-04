const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login('NDc4MDA2NDQ2Mjc4MTgwODc2.DpZYDw.QhZ-9f8xj54yAclVxwe-OMIUJ7w');

bot.on('message', (message) => {
   if(message.author.bot) return;
  
   if(message.content == "!verifyhelp") {
     message.reply('be sure to check out #welcome to learn how to verify!')
   };
   
   if(message.content == "!requestsoff") {
      if (message.member.roles.find('name' => "DiscordRequestsOn")) {
         var role = message.guild.roles.find(role => "DiscordRequestsOn")
         message.member.removeRole(role)
      } else {
         message.reply('your requests are already off!')
      };
   };
   if(message.content == "!requestson") {
      if (message.member.roles.find('name' => "DiscordRequestsOn")) {
         message.reply('you already have them on!')
      } else {
         var role = message.guild.roles.find(role => "DiscordRequestsOn")
         message.member.addRole(role)
      };
   };
});
