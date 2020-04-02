const discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {

  var sluitEmbed = new discord.RichEmbed()
                .setTitle("Ticket Sluiten")
                .setColor('#ffaa00')
                .setDescription("Weet u zeker dat u dit ticket wilt sluiten? \n\nOm te bevestigen stuur:\n`-bevestig`")
                .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
 
   if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Dit is geen ticket-kanaal.`);

    message.channel.send(sluitEmbed)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-bevestig', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit(':no_entry: | De tijd is voorbij, De ticket is niet gesloten!').then(m2 => {
              m2.delete();
          }, 4000);
        });
    });
}

module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}
