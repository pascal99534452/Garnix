const discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    const upTime = new discord.RichEmbed()
    .setTitle("Garnix - Uptime")
    .setDescription(ms(bot.uptime))
    .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
    message.channel.send(upTime);
}

module.exports.help = {
    name: "uptime"
}