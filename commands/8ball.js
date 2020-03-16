const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.channel.send(":no_entry: | Voer een complete vraag in aub!");
    let replies = [
        'Ik weet het niet.',
	    'Altijd.',
	    'Ik heb zon dorst.',
	    'In je dromen.',
    	'Misschien weet jou moeder het?',
	    'Ik denk het.',
    	'Ik weet het zeker.',
    	'Ja.',
    	'Nee.',
    	'Nooit!',
    	'Ik weet het even niet meer.',
	    'Wat?',
    	'Hell no.',
    	'Ja.',
    	'Ik kan deze domme vraag niet beantwoorden...',
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("8Ball! :slight_smile:")
    .setColor('#ffaa00')
    .addField("Vraag:", question)
    .addField("Antwoord:", replies[result])
    .setFooter("Garnix Network", message.guild.iconURL).setTimestamp()

    message.channel.send({embed});
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
module.exports.help = {
    name: '8ball',
    description: 'Ask the bot a Question.',
    usage: '8ball (question)'
  };