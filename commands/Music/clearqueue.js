module.exports = {
    name: "clearqueue",
    aliases: ["cq","clear","temizle"],
    category: "Music",
  	description: "Clear Queue",
	args: false,
    usage: "<Number of song in queue>",
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
	const player = message.client.manager.get(message.guild.id);
    var l1 = await client.translate(message.guild.id,"Çalan Bir Şarkı Bulunmamakta.")
    if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
    var l2 = await client.translate(message.guild.id,"🗑️ Tüm Şarkılar Temizlendi.")
	player.queue.clear();
    return message.channel.send(`**${l2}**`);
    }
};