const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // ID van de categorie van de tickets.
    const categoryId = "637680800736870410";
 
    // Verkrijg Gebruikersnaam
    var userName = message.author.username; 
 
    // Als ticket al gemaakt is
    var bool = false;
 
    // Kijk na als ticket al gemaakt is.
    message.guild.channels.forEach((channel) => {
 
        // Als ticket is gemaakt, zend bericht.
        const existingTicket = message.guild.channels.find(c => c.name === ticket-userName);
        if (existingTicket) {
    message.channel.send(":no_entry: | Je hebt al een ticket open staan!")
    }
 
    // Als ticket return code.
    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Ticket Systeem")
        .setColor('#ffaa00')
        .setDescription("Uw ticket is succesvol aangemaakt!")
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()


 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.createChannel("ticket- " + userName, "text").then((createdChan) => { // Maak kanaal
 
        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.
 
            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
                        settedParent.overwritePermissions(message.guild.roles.find('name', "🔰 | Medewerkers"), { "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 

            var embedParent = new discord.RichEmbed()
                .setTitle("Ticket Systeem")
                .setDescription("Heeft u even geduld, een stafflid zal z.s.m komen. Als er binnen 30 minuten niet gereageerd word, mag u taggen. We zullen uw ticket z.s.m behandelen.")
                .addField("Ticket Eigenaar:", message.author)
                .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
                .setColor('#ffaa00')
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Er is iets fout gegaan!");
        });
 
    }).catch(err => {
        message.channel.send("Er is iets fout gegaan!");
    });
 
}
 
module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan"
}