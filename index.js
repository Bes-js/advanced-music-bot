const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const { readdirSync } = require("fs");
const { JsonDatabase } = require("five.db");
const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const client = global.client = new Client({ intents: Object.keys(GatewayIntentBits), partials: Object.keys(Partials), allowedMentions: { repliedUser: true, parse: ["everyone", "roles", "users"] } });
const db = client.db = new JsonDatabase();

module.exports = client
client.commands = new Collection();
client.config = require("./config.json");
client.prefix = client.config.prefix;
client.aliases = new Collection();
client.commands = new Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");

client.manager = new Manager({
    nodes: client.config.nodes,
    send: (id, payload) => {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
    },
    autoPlay: true,
     plugins: [new Spotify({
     clientID: client.config.clientID,
     clientSecret: client.config.clientSecret,
     })]
});

const translate = require('node-google-translate-skidz');
client.translate = async function (guild, text) {
    try {
        var data = db.get(`language-${guild}`);
        var res;
        if (!data) res = text;
        if (data) {
            var trans = await translate({ text: `${text}`, source: `tr`, target: `${data}` })
            res = trans.translation;
        }
        return res;
    } catch (error) {
        return text
    }
}


client.on("raw", (d) => client.manager.updateVoiceState(d));
client.on("disconnect", () => console.log("Bot Disconnected!"))
client.on("reconnecting", () => console.log("Bot Reconnecting.."))
client.on('warn', error => console.log(error));
client.on('error', error => console.log(error));
process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));


readdirSync("./events/Client/").forEach(file => {
    const event = require(`./events/Client/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[CLIENT] Event ${eventName}`);
    client.on(eventName, event.bind(null, client));
});

readdirSync("./events/Lavalink/").forEach(file => {
    const event = require(`./events/Lavalink/${file}`);
    let eventName = file.split(".")[0];
    console.log(`[LAVA] Event ${eventName}`);
    client.manager.on(eventName, event.bind(null, client));
});

readdirSync("./commands/").forEach(dir => {
    const commandFiles = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);
        console.log(`[COMMAND] ${command.category} | ${command.name}`);
        client.commands.set(command.name, command);
    }
});

client.login(client.config.token);