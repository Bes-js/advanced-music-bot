module.exports = {
	name: "volume",
	aliases: ["v", "vol","ses"],
	category: "Music",
	description: "Çalan Şarkının Sesini Yükseltir/Azaltır.",
	args: false,
  	player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
		const player = message.client.manager.get(message.guild.id);
		var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
		var l2 = await client.translate(message.guild.id,`Şuanki Ses Düzeyi \`%${player.volume}\``)
		if (!args.length)return message.channel.send({content:`**🔉 ${l2}**`});
		const volume = Number(args[0]);
		var l3 = await client.translate(message.guild.id,`Doğru Kullanım \`${message.client.prefix}ses <0-200>\``)
		if (!volume || volume < 0 || volume > 200) return message.channel.send({content:`**${l3}**`});
		player.setVolume(volume);
		var l4 = await client.translate(message.guild.id,`Ses Düzeyi \`%${volume}\` Olarak Ayarlandı`)
		if (volume > player.volume) {
		return message.channel.send({content:`**🔉 ${l4}**`});
		} else if (volume < player.volume) {
		return message.channel.send({content:`**🔈 ${l4}**`});
		} else {
		return message.channel.send({content:`**🔉 ${l4}**`});
		}
		
 	}
};