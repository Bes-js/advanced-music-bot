module.exports = {
	name: "leave",
    aliases: ["dc","ayrıl"],
    category: "Music",
    description: "Leave voice channel",
    args: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
    const player = message.client.manager.get(message.guild.id);
    var l1 = await client.translate(message.guild.id,`Zaten Kanalda Değilim.`)
    if (!player)return message.channel.send({content:`**${l1}**`});
    var l2 = await client.translate(message.guild.id,`👌 Sesli Kanaldan Ayrıldım.`)
    player.destroy();
    return message.channel.send({content:`**${l2}**`});
    }
};