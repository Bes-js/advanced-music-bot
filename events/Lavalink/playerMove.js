const { EmbedBuilder } = require("discord.js");
module.exports = async (client, player, oldChannel, newChannel) => {
  const guild = client.guilds.cache.get(player.guild)
  if (!guild) return;
  const channel = guild.channels.cache.get(player.textChannel);
  if (oldChannel === newChannel) return;
  if (newChannel === null || !newChannel) {
    if (!player) return;
    var l4 = await client.translate(player.guild,`<#${oldChannel}> Kanalından Ayrıldım`)
    if (channel) await channel.send({ embeds: [new EmbedBuilder().setColor(`#00ff00`).setDescription(`**${l4}**`)] })
    return player.destroy();
  } else {
    player.voiceChannel = newChannel;
    if (player.paused) player.pause(false);
    var l5 = await client.translate(player.guild,`<#${player.voiceChannel}> Kanalına Geçiş Yaptım`)
    if (channel) await channel.send({ embeds: [new EmbedBuilder().setColor(`#00ff00`).setDescription(`**${l5}**`)] });
  }

}
