const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.some(r => ["♛ | Founder", "✘ | Management", "✘ | DC Staff"].includes(r.name)))
    return message.reply(":no_entry: | Jij hebt geen toegang tot dit commando!");
  const sayMessage = args.join(" ");

  message.delete().catch(O_o => { });

  message.channel.send(sayMessage);
}

module.exports.help = {
  name: "say"
}