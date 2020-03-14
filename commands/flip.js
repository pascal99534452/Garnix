const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {
     var kop = new discord.RichEmbed()
         .setTitle("Kop of Munt")
         .setDescription("Het is kop!")
         .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
         .setColor('#ffaa00');

     var munt = new discord.RichEmbed()
         .setTitle("Kop of Munt")
         .setDescription("Het is Munt!")
         .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
         .setColor('#ffaa00');
     var result = Math.floor((Math.random() * 2) + 1);
     if (result == 1) {
         message.channel.send(kop)
     } else if (result == 2) {
         message.channel.send(munt)
     }
 }

 module.exports.help = {
     name: "flip"
 } 