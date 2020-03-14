const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickChannel = message.guild.channels.find(`name`, "⛔・logs");
    let member = message.mentions.members.first();

    if (!message.member.roles.some(r => ["♛ | Founder", "✘ | Management", "✘ | DC Staff"].includes(r.name)))
        return message.reply(":no_entry: | Jij hebt geen toegang tot dit commando!");
    if (!member)
        return message.reply(":no_entry: | Je moet wel een speler kiezen die je wilt kicken!");
    if (!member.kickable)
        return message.reply(":no_entry: | Jij kan geen staffleden kicken!");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Geen reden gevonden";

    await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} Ik kan deze persoon niet kicken: ${error}`));

    var kickk = new discord.RichEmbed()
        .setTitle("Kick Systeem")    
        .setColor("#ff0000")
        .addField("Speler:", member)
        .addField("Gekicked door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()

        var kicknn = new discord.RichEmbed()
        .setTitle("Kick Systeem")    
        .setColor("#ff0000")
        .addField("Speler:", member)
        .addField("Gekicked door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
    kickChannel.send(kickk)
    message.channel.send(kicknn)
}
module.exports.help = {
    name: "kick"
}