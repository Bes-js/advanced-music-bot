module.exports = {
	name: "shuffle",
  aliases: ["karıştır"],
    category: "Music",
    description: "Shuffle queue",
    args: false,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
    var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
    if (!player.queue.current)return message.channel.send({content:`**${l1}**`});
    player.queue.shuffle();
    var l2 = await client.translate(message.guild.id,`👌 Liste Karıştırıldı`)
    return message.channel.send({content:`**${l2}**`})
    }
};