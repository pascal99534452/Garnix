const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickChannel = message.guild.channels.find(`name`, "⛔・logs");
    let member = message.mentions.members.first();

    if (!message.member.roles.some(r => ["💼 ・Beheerder", "💼 ・Management", "💼 ・Admin", "💼 ・Moderator"].includes(r.name)))
        return message.channel.send(":no_entry: | Jij hebt geen toegang tot dit commando!");
    if (!member)
        return message.channel.send(":no_entry: | Je moet wel een speler kiezen die je wilt kicken!");
    if (!member.kickable)
        return message.channel.send(":no_entry: | Jij kan geen staffleden kicken!");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Geen reden gevonden";

    await member.kick(reason)
        .catch(error => message.channel.send(`Sorry ${message.author} Ik kan deze persoon niet kicken: ${error}`));

    var kickk = new discord.RichEmbed()
        .setTitle("Kick Systeem")    
        .setColor('#ffaa00')
        .addField("Speler:", member)
        .addField("Gekicked door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()

        var kicknn = new discord.RichEmbed()
        .setTitle("Kick Systeem")    
        .setColor('#ffaa00')
        .addField("Speler:", member)
        .addField("Gekicked door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
    kickChannel.send(kickk)
    message.channel.send(kicknn)
}
module.exports.help = {
    name: "kick"
}