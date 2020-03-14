const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij hebt geen toegang tot dit commando!");

    if (!args[0]) return message.channel.send("!clear [Aantal] :slight_smile:");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0) {

                message.channel.send(`Er zijn geen berichten gevonden die je kunt verwijderen. :frowning:`).then(msg => msg.delete(3000));

            } else if (args[0] == 1) {

                message.channel.send(`Ik heb 1 bericht verwijderd! :joy:`).then(msg => msg.delete(3000));

            } else {

                message.channel.send(`Ik heb ${args[0]} berichten verwijderd! :slight_smile:`).then(msg => msg.delete(3000));
            }

        });
    } else {
        return message.channel.send("Geef een getal op! :slight_smile:")
    }
}

module.exports.help = {
    name: "clear"
}