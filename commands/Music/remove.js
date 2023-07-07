module.exports = {
	name: "remove",
  aliases: ["kaldır"],
    category: "Music",
	description: "Remove song from the queue",
	args: false,
    usage: "<Number of song in queue>",
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current)return message.channel.send({content:`**${l1}**`})
        const position = (Number(args[0]) - 1);
        if (position > player.queue.size) {
            const number = (position + 1);
            var l2 = await client.translate(message.guild.id,`${number} Numaralı Bir Şarkı Bulunmamakta. Tüm Şarkılar \`${player.queue.size}\``)
            return message.channel.send({content:`**${l2}**`});
        }
        var l3 = await client.translate(message.guild.id,`👌 Kaldırıldı`)
		return message.channel.send({content:`**${l3}**`});
    }
};