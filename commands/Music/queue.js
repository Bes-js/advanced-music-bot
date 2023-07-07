const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const pms = require("pretty-ms");
const load = require("lodash");
module.exports = {
   name: "queue",
    category: "Music",
    aliases: ["q","kuyruk","liste"],
    description: "Show the music queue and now playing.",
    args: false,
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
   execute: async (message, args, client, prefix) => {

            const player = client.manager.get(message.guild.id);
            var l1 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
            if(!player) return message.channel.send({content:`**${l1}**`})
            if(!player.queue) return message.channel.send({content:`**${l1}**`})
           
            if(player.queue.length === "0" || !player.queue.length) {
                var l2 = await client.translate(message.guild.id,`Şuan Çalan`)
                const embed = new EmbedBuilder()
                .setColor("Random")
                .setThumbnail(player.queue.current.displayThumbnail("mqdefault"))
                .setDescription(`**${l2}**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • ${player.queue.current.requester}`)

                await message.channel.send({embeds: [embed]}).catch((err) => { });
            } else {
             const queuedSongs = player.queue.map((t, i) => `\`${++i}\` • [${t.title}](${message.url}) • \`[ ${pms(t.duration)} ]\` • ${t.requester}`);                                                                            
                const mapping = load.chunk(queuedSongs, 10);
                const pages = mapping.map((s) => s.join("\n"));
                let page = 0;

                if(player.queue.size < 11) {
                    var l3 = await client.translate(message.guild.id,`Şuan Çalan`)
                    var l4 = await client.translate(message.guild.id,`Listedeki Şarkılar`)
                    var l5 = await client.translate(message.guild.id,`Sayfa`)
                    var l6 = await client.translate(message.guild.id,`Listesi`)
                    const embed = new EmbedBuilder()
                    .setColor("Random")
                    .setDescription(`**${l3}**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • ${player.queue.current.requester}\n\n**${l4}**\n${pages[page]}`)
                    .setTimestamp()
                    .setFooter({text:`${l5} ${page + 1}/${pages.length}`,iconURL: message.author.displayAvatarURL({ dynamic: true })})
                    .setThumbnail(player.queue.current.displayThumbnail("mqdefault"))
                    .setTitle(`${message.guild.name} ${l6}`)

                    await message.channel.send({embeds: [embed]})
                } else {
                    var l7 = await client.translate(message.guild.id,`Şuan Çalan`)
                    var l8 = await client.translate(message.guild.id,`Listedeki Şarkılar`)
                    var l9 = await client.translate(message.guild.id,`Sayfa`)
                    var l10 = await client.translate(message.guild.id,`Listesi`)
                    const embed2 = new EmbedBuilder()
                    .setColor("Random")
                    .setDescription(`**${l7}**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • ${player.queue.current.requester}\n\n**${l8}**\n${pages[page]}`)
                    .setTimestamp()
                    .setFooter({text:`${l9} ${page + 1}/${pages.length}`,iconURL:message.author.displayAvatarURL({ dynamic: true })})
                    .setThumbnail(player.queue.current.displayThumbnail("mqdefault"))
                    .setTitle(`${message.guild.name} ${l10}`)

                    const but1 = new ButtonBuilder()
                    .setCustomId("queue_cmd_but_1")
                    .setEmoji("⬅️")
                    .setStyle(ButtonStyle.Primary)

                    const but2 = new ButtonBuilder()
                    .setCustomId("queue_cmd_but_2")
                    .setEmoji("➡️")
                    .setStyle(ButtonStyle.Primary)

                    const but3 = new ButtonBuilder()
                    .setCustomId("queue_cmd_but_3")
                    .setEmoji("🗑️")
                    .setStyle(ButtonStyle.Danger)

                    const row1 = new ActionRowBuilder().addComponents([but2, but3, but1]);

                    const msg = await message.channel.send({embeds: [embed2],components: [row1]})

                    const collector = msg.createMessageComponentCollector({
                        filter: async(b) => {
                            if(b.user.id === message.author.id) return true;
                            else {
                                var l11 = await client.translate(message.guild.id,`Sadece ${message.author.username} Butonu Kullanabilir,Komudu Tekrar Kullanın.`)
                                b.reply({
                                    ephemeral: true,
                                    content: `**${l11}**`
                                });
                                return false;
                            };
                        },time: 60000*5,idle: 30e3});

                    collector.on("collect", async (button) => {
                        if(button.customId === "queue_cmd_but_1") {
                            await button.deferUpdate().catch(() => {});
                            page = page + 1 < pages.length ? ++page : 0;

                            var l12 = await client.translate(message.guild.id,`Şuan Çalan`)
                            var l13 = await client.translate(message.guild.id,`Listedeki Şarkılar`)
                            var l14 = await client.translate(message.guild.id,`Sayfa`)
                            var l15 = await client.translate(message.guild.id,`Listesi`)
                            const embed3 = new EmbedBuilder()
                            .setColor("Random")
                            .setDescription(`**${l12}**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • ${player.queue.current.requester}\n\n**${l13}**\n${pages[page]}`)
                            .setTimestamp()
                            .setFooter({text:`${l14} ${page + 1}/${pages.length}`,iconURL:message.author.displayAvatarURL({ dynamic: true })})
                            .setThumbnail(player.queue.current.displayThumbnail("mqdefault"))
                            .setTitle(`${message.guild.name} ${l15}`)

                            await msg.edit({embeds: [embed3],components: [row1]})
                        } else if(button.customId === "queue_cmd_but_2") {
                            await button.deferUpdate().catch(() => {});
                            page = page > 0 ? --page : pages.length - 1;
                            var l16 = await client.translate(message.guild.id,`Şuan Çalan`)
                            var l17 = await client.translate(message.guild.id,`Listedeki Şarkılar`)
                            var l18 = await client.translate(message.guild.id,`Sayfa`)
                            var l19 = await client.translate(message.guild.id,`Listesi`)
                            const embed4 = new EmbedBuilder()
                            .setColor("Random")
                            .setDescription(`**${l16}**\n[${player.queue.current.title}](${player.queue.current.uri}) • \`[ ${pms(player.position)} / ${pms(player.queue.current.duration)} ]\` • ${player.queue.current.requester}\n\n**${l17}**\n${pages[page]}`)
                            .setTimestamp()
                            .setFooter({text:`${l18} ${page + 1}/${pages.length}`,iconURL:message.author.displayAvatarURL({ dynamic: true })})
                            .setThumbnail(player.queue.current.displayThumbnail("mqdefault"))
                            .setTitle(`${message.guild.name} ${l19}`)

                            await msg.edit({embeds: [embed4],components: [row1]}).catch(() => {});
                        } else if(button.customId === "queue_cmd_but_3") {
                            await button.deferUpdate().catch(() => {});
                            collector.stop();
                        } else return;
                    });

                    collector.on("end", async () => {
                        await msg.edit({components: []})
                    });
                }
            }
       }
  };