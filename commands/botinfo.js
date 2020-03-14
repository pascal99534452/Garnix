const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Bot Informatie")
        .addField("Bot Naam", bot.user.username)
        .setThumbnail(botIcon)
        .addField("Gemaakt op:", bot.user.createdAt)
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
        .setColor('#ff0000');

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}