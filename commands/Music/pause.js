module.exports = {
	name: "pause",
  aliases: ["durdur"],
    category: "Music",
    description: "Pause the currently playing music",
    args: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
      var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
        var l2 = await client.translate(message.guild.id,`Şarkı Zaten Durdurulmuş.`)
        if (player.paused) return message.channel.send({content:`**${l2}**`});
        player.pause(true);
        var l3 = await client.translate(message.guild.id,`Durduruldu`)
        return message.channel.send({content:`**⏹️ ${l3}** \`${player.queue.current.title}\``});
    }
};