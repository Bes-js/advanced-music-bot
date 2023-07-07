module.exports = {
	name: "join",
    aliases: ["j","katıl"],
    category: "Music",
    description: "Join voice channel",
    args: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: false,
 execute: async (message, args, client, prefix) => {
		const { channel } = message.member.voice;
        if(!message.guild.members.cache.get(client.user.id).voice.channel) {
        const player = message.client.manager.create({guild: message.guild.id,voiceChannel: channel.id,
        textChannel: message.channel.id,volume: 100,selfDeafen: true,});
        player.connect();
        var l1 = await client.translate(message.guild.id,`<#${channel.id}> Kanalına Katıldım <#${message.channel.id}> Kanalına Bilgi Atacağım`)
        return message.channel.send({content:`**${l1}**`});
        } else if (message.guild.members.cache.get(client.user.id).voice.channel !== channel) {
        var l2 = await client.translate(message.guild.id,`Benimle Aynı Kanalda Olmalısın ${message.client.user}!`)
        return message.channel.send({content:`**${l2}**`});
        }
    }
};