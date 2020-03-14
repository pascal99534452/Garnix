const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Help - Garnix Network")
        .setDescription("**!members** - Laat het aantal server leden zien! \n **!botinfo** - Laat informatie zien van de bot! \n **!ban** - Verban een gebruiker! \n **!kick** - Verwijder een gebruiker! \n **!ticket** - Maak een prive kanaal aan met staffleden! \n **!close** - Sluit een ticket! \n **!serverinfo** - Laat informatie zien van de discord server! \n **!avatar** - Laat je discord profiel foto zien! \n **!idee** - Plaat een idee! \n **!clear** - Verwijder berichten! \n **!melding** - Plaats een melding! \n **!say** - Laat de bot een bericht zeggen! \n **!ip** - Laat het minecraft ip zien!")
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
        .setColor('#ffaa00');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "help"
}