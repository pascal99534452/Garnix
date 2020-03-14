const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banChannel = message.guild.channels.find(`name`, "⛔・logs");
    let member = message.mentions.members.first();

    if (!message.member.roles.some(r => ["♛ | Founder", "✘ | Staff"].includes(r.name)))
        return message.reply(":no_entry: | Jij hebt geen toegang tot dit commando!");
    if (!member)
        return message.reply(":no_entry: | Je moet wel een speler kiezen die je wilt verbannen!");
    if (!member.bannable)
        return message.reply(":no_entry: | Jij kan geen staffleden verbannen!");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Geen reden gevonden";

    await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} Ik kan deze persoon niet bannen: ${error}`));

    var bann = new discord.RichEmbed()
        .setTitle("Ban Systeem")    
        .setColor("#ff0000")
        .addField("Speler:", member)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()

        var bannn = new discord.RichEmbed()
        .setTitle("Ban Systeem")    
        .setColor("#ff0000")
        .addField("Speler:", member)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter("Outlandz's Community", message.guild.iconURL).setTimestamp()
    banChannel.send(bann)
    message.channel.send(bannn)
}

module.exports.help = {
    name: "ban"
}