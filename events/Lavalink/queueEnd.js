module.exports = async (client, player) => {
	const channel = client.channels.cache.get(player.textChannel);
	var l1 = await client.translate(player.guild,`👌 Liste Sona Erdi!`)
	channel.send(`**${l1}**`);
}