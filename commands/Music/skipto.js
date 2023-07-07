const { EmbedBuilder } = require("discord.js");
module.exports = {
	name: "skipto",
	aliases: ["jump","geçiş"],
	category: "Music",
	description: "Forward song",
	args: true,
    usage: "<Number of song in queue>",
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
        const position = Number(args[0]);
        var l2 = await client.translate(message.guild.id,`Kullanım \`${message.client.prefix}geçiş <Şarkı Sayısı>\``)
		if (!position || position < 0 || position > player.queue.size) return message.channel.send({content:`**${l2}**`});
		var l3 = await client.translate(message.guild.id,`\`${position}\` Sırasındaki Şarkıya Atlandı.`)
        player.queue.remove(0, position - 1);
        player.stop();
		return message.channel.send({content:`**${l3}**`});
	
    }
};