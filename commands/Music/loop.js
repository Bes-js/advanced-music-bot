module.exports = {
	name: "loop",
    aliases: ['l',"döngü"],
    category: "Music",
	description: "Toggle music loop",
	args: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`})

        if (args.length && /queue/i.test(args[0])) {
            player.setQueueRepeat(!player.queueRepeat);
            const queueRepeat = player.queueRepeat ? "🟢" : "🔴";
            var l2 = await client.translate(message.guild.id,`Döngü Şuan`)
		   return message.channel.send({content:`**${l2} [${queueRepeat}]**`});
        }

        player.setTrackRepeat(!player.trackRepeat);
        const trackRepeat = player.trackRepeat ? "🟢" : "🔴";
        var l3 = await client.translate(message.guild.id,`Döngü Şuan`)
		return message.channel.send({content:`**${l3} [${trackRepeat}]**`});
    }
};