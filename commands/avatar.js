const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var member = message.member.user.tag;
    
    var botEmbed = new discord.RichEmbed()
        .setTitle("Avatar" + message.author)
        .setImage(message.author.displayAvatarURL)
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
        .setColor('#ffaa00');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "avatar"
}