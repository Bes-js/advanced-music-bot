const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme","davet"],
    description: "invite Five",
    args: false,
   execute: async (message, args, client, prefix) => {
    var l1 = await client.translate(message.guild.id,`Davet Butonuna Basarak Sunucunuza Davet Edebilirsiniz!`)
    var l2 = await client.translate(message.guild.id,`Davet`)
return message.channel.send({embeds: [new EmbedBuilder().setColor("Random").setDescription(`> **${l1}**`)], components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel(`${l2}`).setStyle(ButtonStyle.Link).setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`))]})
    }
}