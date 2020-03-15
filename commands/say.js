const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.some(r => ["💼 ・Beheerder", "💼 ・Management", "💼 ・Admin", "💼 ・Moderator"].includes(r.name)))
    return message.reply(":no_entry: | Jij hebt geen toegang tot dit commando!");
  const sayMessage = args.join(" ");

  message.delete().catch(O_o => { });

  var embed = new discord.RichEmbed()
  .setDescription(sayMessage)
  .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()
  .setColor('#ffaa00');

  message.channel.send(embed);
}

module.exports.help = {
  name: "say"
}