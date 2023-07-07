const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message) => {
   if (!message.guild || message.author.bot) return;
    var prefix = client.prefix;
    const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(mention)) return message.channel.send({embeds: [new EmbedBuilder().setColor("Random").setDescription(`**Prefixim \`${prefix}\`**`)]});

   const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [ matchedPrefix ] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    var l1 = await client.translate(message.guild.id,`Bir Argüman Girmedin. Kullanım`)
    if (command.args && !args.length)return message.channel.send({content:`> **${l1} \`${prefix}${command?.name} ${command?.usage}\`**`});
    var lfive = await client.translate(message.guild.id,`Komudu Kullanmak İçin Yeterki Yetkin Bulunmamakta.`)
    if (command.permission && !message.member.permissions.has(command.permission)) return message.channel.send(`**${lfive}**`);
    const player = message.client.manager.get(message.guild.id)
    var l2 = await client.translate(message.guild.id,`Çalan Bir Şarkı Bulunmamakta.`)
    if (command.player && !player) return message.channel.send({content:`**${l2}**`});
    var l3 = await client.translate(message.guild.id,`Bir Ses Kanalında Olmalısın!`)
    if (command.inVoiceChannel && !message.member.voice.channel) return message.channel.send({content:`**${l3}**`});
    var l4 = await client.translate(message.guild.id,`Müzik Dinliyebilmek İçin Benimle Aynı Kanalda Olmalısın!`)
    if (command.sameVoiceChannel && message.member.voice.channel !== message.guild.members.cache.get(client.user.id).voice.channel) return message.channel.send({content:`**${l4}**`});
    
    try {
        message.react(`🟢`).catch(err => {})
        command.execute(message, args, client, prefix);
    } catch (error) {
        message.react(`🔴`).catch(err => {})
        var l5 = await client.translate(message.guild.id,`Komut Yüklenirken Bir Hata Gerçekleşti, Daha Sonra Tekrar Deneyiniz`)
        return message.channel.send({content:`**⚠️ ${l5}**`});
    }

  }