const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs")

const bot = new discord.Client();
bot.commands = new discord.Collection

fs.readdir("./commands/", (err, files) => {

   if (err) console.log(err);

   var jsFiles = files.filter(f => f.split(".").pop() === "js");

   if (jsFiles.length <= 0) {
      console.log("Kon geen files vinden");
      return;
   }

   jsFiles.forEach((f, i) => {

      var fileGet = require(`./commands/${f}`);
      console.log(`De file ${f} is geladen!`);

      bot.commands.set(fileGet.help.name, fileGet);
   })
});

bot.on("ready", async () => {

   console.log(`${bot.user.username} is online!`)

   bot.user.setActivity("Garnix Network", { type: "PLAYING" });

})


bot.on("message", async message => {

   // Als bot bericht stuurt stuur dan return
   if (message.author.bot) return;

   if (message.channel.type === "dm") return;

   var prefix = botConfig.prefix;

   var messageArray = message.content.split(" ");

   var command = messageArray[0];

   var arguments = messageArray.slice(1);

   var commands = bot.commands.get(command.slice(prefix.length));

   if (commands) commands.run(bot, message, arguments);

});
bot.on("guildMemberAdd", member => {

   const channel = member.guild.channels.find("name", "welkom");
   if (!channel) console.log("Kan het kanaal niet vinden.");

   var joinEmbed = new discord.RichEmbed()
       .setTitle(`Welkom  ${member.user.tag}!`)
       .setDescription("Veel plezier op onze discord server.")
       .setColor('#ffaa00')
       .setFooter("Garnix Network", guild.displayAvatarURL).setTimestamp()
       .setThumbnail(member.user.displayAvatarURL);

   channel.send(joinEmbed);

});

bot.on("guildMemberAdd", member => {

   var role = member.guild.roles.find("name", "🌿 ・Lid")

   if (!role) return;

   member.addRole(role);
});
bot.login(process.env.token);