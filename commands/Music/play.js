const { EmbedBuilder } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "play",
    category: "Music",
    aliases: ["p", "çal", "oynat"],
    description: "Plays audio from YouTube,Soundcloud Or Spotify",
    args: true,
    usage: "<YouTube URL | Video Name | Spotify URL>",
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: false,
    execute: async (message, args, client, prefix) => {

        const { channel } = message.member.voice;
        var player = message.client.manager.get(message.guild.id);

        if (player && message.member?.voice?.channel !== message.guild.members.cache.get(client.user.id).voice?.channel) {
            var l1 = await client.translate(message.guild.id,`Müzik Dinliyebilmek İçin Benimle Aynı Kanalda Olmalısın!`)
            return message.channel.send({ content: `**${l1}**` });
        } else if (!player) {
            var player = message.client.manager.create({
                guild: message.guild.id, voiceChannel: channel.id, textChannel: message.channel.id,
                volume: 100, selfDeafen: true,
            });
        }

        if (player.state !== "CONNECTED") player.connect();
        player.set("autoplay", false);

        const search = args.join(' ');
        let res;
        var l2 = await client.translate(message.guild.id,`Aranıyor`)
        if (message.content.includes("youtu")) {
            message.channel.send({ content: `> \`🔴 Youtube \` **${l2}** :mag_right: **\`${args.join(" ")}\`**` })
        } else if (message.content.includes("spotify")) {
            message.channel.send({ content: `> \`🟢 Spotify \` **${l2}** :mag_right: **\`${args.join(" ")}\`**` })
        } else if (message.content.includes("soundcloud")) {
            message.channel.send({ content: `> \`🟠 SoundCloud \` **${l2}** :mag_right: **\`${args.join(" ")}\`**` })
        } else {
            message.channel.send({ content: `> \`🔴 Youtube \` **${l2}** :mag_right: **\`${args.join(" ")}\`**` })
        }

        try {
            res = await player.search(search, message.author);
            if (res.loadType === 'LOAD_FAILED') {
                if (!player.queue.current) player.destroy();
                throw res.exception;
            }
        } catch (err) {
            var l3 = await client.translate(message.guild.id,`Parçayı Arama Sırasında Bir Hata İle Karşılaştım:`)
            return message.channel.send({ content: `> **⚠️ ${l3} ${err.message}**` });
        }

        switch (res.loadType) {
            case 'NO_MATCHES':
                if (!player.queue.current) player.destroy();
                var l4 = await client.translate(message.guild.id,`Aramadan Bir Sonuç Bulunamadı..`)
                return message.channel.send({ content: `> **❌ ${l4}**` });
            case 'TRACK_LOADED':
                var track = res.tracks[0];
                player.set("autoplay", false);
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    return player.play();
                } else {
                    var l5 = await client.translate(message.guild.id,`Kanal`)
                    var l6 = await client.translate(message.guild.id,`Ekliyen Kişi`)
                    var l7 = await client.translate(message.guild.id,`Süre`)
                    var l8 = await client.translate(message.guild.id,`Kuyruğa Şarkı Eklendi`)
                    var embed = new EmbedBuilder().setColor("Random").setTimestamp().addFields([
                        { name: `${l5}`, value: `${track.author}`, inline: true },
                        { name: `${l6}`, value: `<@${track.requester.id}>`, inline: true },
                        { name: `${l7}`, value: `**\`[${convertTime(track.duration)}]\`**`, inline: true }
                    ]).setAuthor({ name: `🎵 ${l8}`, iconURL: message.author.avatarURL({ dynamic: true }) }).setThumbnail(`https://img.youtube.com/vi/${track.identifier}/mqdefault.jpg`).setTitle(`**${track.title}**`).setURL(`https://img.youtube.com/vi/${track.identifier}/mqdefault.jpg`)
                    return message.channel.send({ embeds: [embed] });
                }
            case 'PLAYLIST_LOADED':
                var l9 = await client.translate(message.guild.id,`Kuyruğa Liste Eklendi`)
                var l10 = await client.translate(message.guild.id,`Adet Şarkı`)
                player.set("autoplay", false);
                player.queue.add(res.tracks);
                if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) player.play();
                var embed = new EmbedBuilder().setColor(client.embedColor).setTimestamp().setThumbnail(`https://cdn.discordapp.com/emojis/900883866527596614.png?size=128&quality=lossless`).setAuthor({ name: `🎵 ${l9}`, iconURL: message.author.avatarURL({ dynamic: true }) }).setTitle(`**${res.tracks.length} ${l10}** \`${res.playlist.name}\` **~** \`[${convertTime(res.playlist.duration)}]\``).setURL(`https://cdn.discordapp.com/emojis/900883866527596614.png?size=128&quality=lossless`)
                return message.channel.send({ embeds: [embed] });
            case 'SEARCH_RESULT':
                var track = res.tracks[0];
                player.set("autoplay", false);
                player.queue.add(track);
                if (!player.playing && !player.paused && !player.queue.size) {
                    return player.play();
                } else {
                    var l11 = await client.translate(message.guild.id,`Kanal`)
                    var l12 = await client.translate(message.guild.id,`Ekliyen Kişi`)
                    var l13 = await client.translate(message.guild.id,`Süre`)
                    var l14 = await client.translate(message.guild.id,`Kuyruğa Şarkı Eklendi`)
                    var embed = new EmbedBuilder().setColor("Random").setTimestamp().addFields([
                        { name: `${l11}`, value: `${track.author}`, inline: true },
                        { name: `${l12}`, value: `<@${track.requester.id}>`, inline: true },
                        { name: `${l13}`, value: `**\`[${convertTime(track.duration)}]\`**`, inline: true }
                    ]).setAuthor({ name: `🎵 ${l14}`, iconURL: message.author.avatarURL({ dynamic: true }) }).setThumbnail(`https://img.youtube.com/vi/${track.identifier}/mqdefault.jpg`).setTitle(`**${track.title}**`).setURL(`https://img.youtube.com/vi/${track.identifier}/mqdefault.jpg`)
                    return message.channel.send({ embeds: [embed] });
                }
        }
    }
}