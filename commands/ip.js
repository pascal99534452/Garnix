const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     var botIcon = bot.user.displayAvatarURL

     var botEmbed = new discord.RichEmbed()
         .setTitle("Minecraft Server:")
         .addField("Server ip:", "play.garnix.nl")
         .setThumbnail(botIcon)
         .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
         .setColor('#ffaa00');

     return message.channel.send(botEmbed);

 }

 module.exports.help = {
 name: "ip"
 }