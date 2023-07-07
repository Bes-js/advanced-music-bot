const { EmbedBuilder } = require("discord.js")
const lyricsFinder = require("lyrics-finder");
const _ = require("lodash");
module.exports = {
	name: "lyrics",
    aliases: ["ly","Lyrics","söz","sözler"],
    category: "Music",
    description: "Get lyrics for the currently playing song",
    args: false,
	 execute: async (message, args, client) => {
    let player = message.client.manager.get(message.guild.id);
    var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta Veya Kelime Girilmedi.`)
    if (!args[0] && !player)return message.channel.send({content:`**${l1}**`});
    let SongTitle = args.join(' ') ? args.join(' ') : player.queue.current.title;
    SongTitle = SongTitle.replace(/lyrics|lyric|lyrical|official music video|\(official music video\)|audio|feat|feat.|prod by|official|video|official video|official video hd|official hd video|offical video music|\(offical video music\)|extended|hd|(\[+\])/gi,"");
    let lyrics = await lyricsFinder(SongTitle);
    var l2 = await client.translate(message.guild.id,`İçin Şarkı Sözünü Bulamadım.`)
    if (!lyrics)return message.channel.send({content:`**\`${SongTitle}\` - ${l2}**`});
    lyrics = lyrics.split("\n");
    let SplitedLyrics = _.chunk(lyrics, 40);
    SplitedLyrics.map((ly) => {
      let em = new EmbedBuilder()
        .setAuthor({name:`${SongTitle}`})
        .setColor("Random")
        .setTimestamp()
        .setDescription(ly.join("\n"));
      return message.channel.send({embeds:[em]});
     });
  }}