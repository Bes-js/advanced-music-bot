const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: "ping",
    category: "Information",
    description: "Check Ping Bot",
    args: false,
    execute: async (message, args, client, prefix) => {
    var l1 = await client.translate(message.guild.id,`Milisaniye`)
   return message.channel.send({embeds: [new EmbedBuilder().setAuthor({name:`Ping`,iconURL:client.user.displayAvatarURL({ dynamic: true })}).setColor("Random").addFields([{name:`Ping`,value:`**${client.ws.ping}** *${l1}*`,inline:false}]).setTimestamp()]});
  }
};
