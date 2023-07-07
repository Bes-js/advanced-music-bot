module.exports = {
	name: "resume",
    aliases: ["r","devam"],
    category: "Music",
    description: "Resume currently playing music",
    args: false,
    usage: "<Number of song in queue>",
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`})
        var l2 = await client.translate(message.guild.id,`Zaten Oynatılıyor..`)
        if (!player.paused) return message.channel.send({content:`**${l2}**`});
        player.pause(false);
        return;
    }
};