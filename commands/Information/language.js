const client = global.client;
const db = client.db;
const langs = require("../../lang.json")
module.exports = {
    name: "language",
    category: "Information",
    aliases: ["lng","lang"],
    description: "Setup guild language",
    args: false,
   execute: async (message, args, client, prefix) => {
    var selection = args[0];
    var l1 = await client.translate(message.guild.id,`Bir Dil Kodu Girmen Gerekmekte! Örnek; \`${prefix}language en\``)
    if(!selection) return message.channel.send({content:`**${l1}**`})
    var l2 = await client.translate(message.guild.id,`Geçerli Bir Dil Kodu Girmen Gerekmekte! Örnek; \`${prefix}language en\``)
    if(!langs.all.some(lang => selection == lang.code))return message.channel.send({content:`**${l2}**`})
    var finded = langs.all.find(lang => lang.code == selection);
    db.set(`language-${message.guild.id}`, `${selection}`)
    return message.channel.send({content:`> **👌 Language Code; \`${finded.code}\`**\n> **Native Name; \`${finded.nativeName} (${finded.name})\`**`})
    }
}
