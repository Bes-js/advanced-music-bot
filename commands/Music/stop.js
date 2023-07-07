const { EmbedBuilder } = require("discord.js");
module.exports = {
	name: "stop",
    aliases: ["kapat"],
    category: "Music",
    description: "Çalan Müziği Sonlandırır Ve Kuyruğu Temizler.",
    args: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
        var l2 = await client.translate(message.guild.id,`Müzik Kapatıldı!`)
        player.stop();
        player.queue.clear();
        message.channel.send({content:`**✅ ${l2}**`});
	
  	}
};