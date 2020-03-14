const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
     var botEmbed = new discord.RichEmbed()
         .setTitle('**Garnix Network**')
         .setDescription('Auke stinkt naar afgebrokkelde paarden poep!')
         .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
         .setColor('#ffaa00');

     message.channel.send(botEmbed);

 }

 module.exports.help = {
     name: "auke"
 }