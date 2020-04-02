const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ID van de categorie van de tickets.
    const categoryId = "637680800736870410";

    // Verkrijg Gebruikersnaam
    var userName = message.author.username;
    // Verkrijg discriminator
    var userDiscriminator = message.author.discriminator;

    // Als ticket al gemaakt is
    var bool = false;

    // Kijk na als ticket al gemaakt is.
        if (message.guild.channels.find(c => c.name === "ticket-" + message.author.discriminator)) {
            const embed = new discord.RichEmbed()
            .setTitle("Ticket Systeem")
            .setDescription("Jij hebt mommenteel al een ticket geopend.")
            .setColor('#ffaa00')
            .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()

            return message.channel.send(embed);
        }

    });

    // Als ticket return code.
    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Ticket Systeem")
        .setDescription("Je support kanaal is succesvol aangemaakt!")
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
        .setColor('#ffaa00');

    message.channel.send(embedCreateTicket)

    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel("ticket-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

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
                .setTitle("Garnix Network")
                .setDescription("Heeft u even geduld, een stafflid zal z.s.m komen. Als er binnen 30 minuten niet gereageerd word, mag je taggen. We zullen uw ticket z.s.m behandelen.")
                .addField("Ticket Eigenaar:", message.author)
                .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
                .setColor('#ffaa00');

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