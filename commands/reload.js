const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if (message.author.id != "226707609296699402") return message.channel.send("Alleen de eigenaar van de bot mag dit command gebruiken!").then(m => m.delete(5000));

        if (!args[0]) return message.channel.send("Geef een file-naam op. :)")

          let commandName = args[0].toLowerCase()

        try {
          delete require.cache[require.resolve(`./${commandName}.js`)]
          bot.commands.delete(commandName)
          var pull = require(`./${commandName}.js`);
          bot.commands.set(commandName, pull)
        } catch(e) {
           return message.channel.send(`Restart niet mogelijk: \`${args[0].toUpperCase()}\``)

        }
        let restart = new Discord.RichEmbed()
                .setDescription(`:white_check_mark: **Developer Mode:** ${message.author.username} dit bestand is succesvol gerestart: \`${args[0].toUpperCase()}\``)
                .setColor('#fc0400');
            message.channel.send(restart);


}

module.exports.help = {
    name: "reload"
}