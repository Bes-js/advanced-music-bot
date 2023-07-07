const delay = require("delay");

module.exports = async (client, oldState, newState) => {
	const player = client.manager?.players.get(newState.guild.id)
	if (!player) return
	if (!newState.guild.members.cache.get(client.user.id).voice.channelId) player.destroy()
	if (oldState.id === client.user.id || !oldState.guild.members.cache.get(client.user.id).voice.channelId) return
	if (oldState.guild.members.cache.get(client.user.id).voice.channelId === oldState.channelId) {
		if (oldState.guild.members.cache.get(client.user.id).voice?.channel && oldState.guild.members.cache.get(client.user.id).voice.channel.members.filter((m) => !m.user.bot).size === 0) {
			await delay(45000)
			const voiceMembers = oldState.guild.members.cache.get(client.user.id).voice.channel?.members.size
			if (!voiceMembers || voiceMembers == 1) {
				const newPlayer = client.manager?.players.get(newState.guild.id)
				newPlayer ? player.destroy() : oldState.guild.members.cache.get(client.user.id).voice.channel.leave()
				try {
					const channel = client.channels.cache.get(player.textChannel)

					var l1 = await client.translate(message.guild.id,`<#${oldState.guild.members.cache.get(client.user.id).voice.channel.id}> Kanalından Ayrıldım Çünkü Kanalda Kişi Olmadığı Halda Yeterince Uzun Durdum.`)
					if (channel) channel.send({ content: `📤 **${l1}**` })
				} catch (err) {
					console.log(err.message)
				}
			}
		}
	}



};