module.exports = {
	name: "skip",
	aliases: ["s","geç","atla"],
	category: "Music",
	description: "Skip the currently playing song",
	args: false,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
		const player = message.client.manager.get(message.guild.id);
        var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
        if (!player.queue.current) return message.channel.send({content:`**${l1}**`});
        const autoplay = player.get("autoplay");
        if (autoplay === false) {
            player.stop();
        } else {
            player.stop();
            player.queue.clear();
            player.set("autoplay", false);
        }
		return;
	
    }
};