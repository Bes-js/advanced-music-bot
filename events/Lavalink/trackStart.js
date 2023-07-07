const { EmbedBuilder } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
module.exports = async (client, player, track, payload) => {
  player.set("autoplay", false);
  var l1 = await client.translate(player.guild,`Kanal`)
  var l2 = await client.translate(player.guild,`Ekliyen Kişi`)
  var l3 = await client.translate(player.guild,`Süre`)
  var l4 = await client.translate(player.guild,`Oynatılıyor`)
  const embed = new EmbedBuilder()
    .setColor("Random").setTimestamp()
    .addFields([
      { name: `${l1}`, value: `${track.author}`, inline: true },
      { name: `${l2}`, value: `${track?.requester ? `<@${track.requester.id}>` : "Autoplay"}`, inline: true },
      { name: `${l3}`, value: `**\`[${convertTime(track.duration)}]\`**`, inline: true },
    ]).setAuthor({ name: `🎶 ${l4}`, iconURL: track?.requester ? track.requester.avatarURL({ dynamic: true }) : "https://cdn.discordapp.com/emojis/903985373259128873.gif?size=128&quality=lossless" })
    .setThumbnail(track.displayThumbnail("mqdefault"))
    .setTitle(`**${track.title}**`).setURL(`${track.uri}`)

  const channel = client.channels.cache.get(player.textChannel);
  channel.send({ embeds: [embed] })

}