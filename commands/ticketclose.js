const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Id van category van tickets.
    const categoryId = "637680800736870410";

    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send(":no_entry: | Dit commando werkt alleen in een ticket!");

    }
    var userName = message.author.username;

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Ticket Systeem")
        .addField("Ticket maker:", message.channel.name)
        .addField("Gesloten door:", message.author)
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
        .setColor('#ffaa00');

    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "⛔・logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}