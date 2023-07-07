module.exports = async (client, player, track, payload) => {
    const channel = client.channels.cache.get(player.textChannel);
    var l1 = await client.translate(player.guild,`Çalınacak Şarkıyla İlgili Bir Problem Oluştu!`)
    channel.send({ content: `> **⚠️ ${l1}**` });
    if (!player.voiceChannel) player.destroy();
}