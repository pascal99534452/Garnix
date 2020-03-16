const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
    .setColor('#ffaa00')
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .addField("Server Naam:", `${message.guild.name}`, true)
    .addField("Server Eigenaar:", `${message.guild.owner}`, true)
    .addField("Aantal Leden:", `${message.guild.memberCount}`, true)
    .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "serverinfo"
}