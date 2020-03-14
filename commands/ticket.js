const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ID van de categorie van de tickets.
    const categoryId = "687253002519707689";

    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;

    // Als ticket al gemaakt is
    var bool = false;

    // Kijk na als ticket al gemaakt is.
    await message.guild.channels.forEach((channel) => {

        // Als ticket is gemaakt, zend bericht.
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send(":no_entry: | Je hebt al een ticket geopend!");

            bool = true;

        }

    });

    // Als ticket return code.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Ticket Systeem")
        .setDescription("Je support kanaal is succesvol aangemaakt!")
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
        .setColor('#ff0000');

    message.channel.send(embedCreateTicket)

    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });

            settedParent.overwritePermissions(message.guild.roles.find('name', "Ticketss"), {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Ticket Systeem")
                .setDescription("Zet hier je bericht in, Een stafflid helpt je zo snel mogelijk!")
                .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
                .setColor('#ff0000');

            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Er is iets fout gelopen.");
        });

    }).catch(err => {
        message.channel.send("Er is iets fout gelopen.");
    });

}

module.exports.help = {
    name: "ticket",
}