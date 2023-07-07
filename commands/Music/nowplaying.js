const { EmbedBuilder } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')
module.exports = {
	name: "nowplaying",
    aliases: ["np","çalan","şuan"],
    category: "Music",
    description: "Show now playing song",
    args: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
	 execute: async (message, args, client, prefix) => {
      const player = message.client.manager.get(message.guild.id);
      var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
      if (!player.queue.current) return message.channel.send({content:`**${l1}**`})
        const song = player.queue.current
        var l2 = await client.translate(message.guild.id,`Şuan Çalan`)
        var l3 = await client.translate(message.guild.id,`Kanal`)
        var l4 = await client.translate(message.guild.id,`Ekliyen Kişi`)
        var l5 = await client.translate(message.guild.id,`Süre`)
        let embed = new EmbedBuilder()
        .setAuthor({name:`🎶 ${l2}`,iconURL:message.author.avatarURL({dynamic: true})})
        .setTitle(`**${song.title}**`).setURL(`${song.uri}`)
        .addFields([
            {name:`${l3}`,value:`${song.author}`,inline:true},
            {name:`${l4}`,value:`<@${song.requester.id}>`,inline:true},
            {name:`${l5}`,value:`**\`[${convertTime(song.duration)}]\`**`,inline:true},
        ]).setThumbnail(song.displayThumbnail("mqdefault")).setColor("Random")
        .addFields([
            {name:"\u200b",value:progressbar(song.duration, player.position, 15, '▬', '🟢'),inline:false},
            {name:"\u200b",value:`\`${convertTime(player.position)} / ${convertTime(song.duration)}\``,inline:false}
        ])
         return message.channel.send({embeds: [embed]})    
    }
};