import { User } from 'discord.js';

const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login(String(process.env.token));

bot.on('message', (message) => {
   if(message.author.bot) return;
  
   if(message.content == "!verifyhelp") {
     message.reply('be sure to check out #welcome to learn how to verify!')
   };
   
   if(message.content == "!requestsoff") {
      if (message.member.roles.find(role => role.name === "DiscordRequestsOn")) {
         var role = message.guild.roles.find(role => role.name === "DiscordRequestsOn")
         message.member.removeRole(role)
      } else {
         message.reply('your requests are already off!')
      };
   };
   if(message.content == "!requestson") {
      if (message.member.roles.find(role => role.name === "DiscordRequestsOn")) {
         message.reply('you already have them on!')
      } else {
         var role = message.guild.roles.find(role => role.name === "DiscordRequestsOn")
         message.member.addRole(role)
      };
   };
   if(message.channel.name == "verification-channel") {
    const args = message.content.slice().trim().split(/ +/g);
    var id = args[2]
    if(message.guild.members.find(User => User.id === id)) {
      var member = message.guild.members.find(User => User.id === id)
      if (member.roles.find(role => role.name === "DiscordRequestsOn")) {
        member.sendMessage("A discord to roblox account request has been sent by "+message.member.displayName+", please answer yes or no if you would like to set this as your roblox account!")
      };
    };
  };
});
