<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Advanced%20Music%20Bot&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=f0f0f0" /></center>

[![Version][version-shield]](version-url)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Run on Repl.it](https://repl.it/badge/github/Bes-js/advanced-music-bot)](https://repl.it/github/Bes-js/advanced-music-bot)
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/Bes-js/advanced-music-bot)

<br />
<p align="center">
    <a href="https://github.com/Bes-js/advanced-music-bot">
    <img src="https://cdn.discordapp.com/emojis/1125060914555670660.gif?size=128&quality=lossless" alt="Pbot-plus" width="200" height="200">
  </a>
  <h1 align="center">Advanced Music Bot</h1>
  <p align="center">Advanced Music Bot is a V14 Music Bot that uses Discord.js Package and Supports All Languages ​​Powered by Erela.js.
    <br />
    <br />
    <a href="https://discord.gg/luppux">Report Bug & Request Feature</a>
  </p>
</p>

## 🔥 Unique Features

- Developed using JavaScript and Discord.js v14
- Advanced Music System
- Customizable Languages
- Powerful Search Engine
- Highly Configurable
- User-friendly and Easy to Use
- Playlist Supports

## 🎶 Support Sources

- ![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=plastic&logo=youtube&logoColor=white)
- ![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=plastic&logo=spotify&logoColor=white)
- ![SoundCloud](https://img.shields.io/badge/SoundCloud-FF3300?style=plastic&logo=soundcloud&logoColor=white)
- ![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=plastic&logo=twitch&logoColor=white)
- ![Bandcamp](https://img.shields.io/badge/Bandcamp-629AA9?style=plastic&logo=bandcamp&logoColor=white)
- ![Vimeo](https://img.shields.io/badge/Vimeo-1AB7EA?style=plastic&logo=vimeo&logoColor=white)
- ![http](https://img.shields.io/badge/http-FFA500?style=plastic&logo=http&logoColor=white)

🔌 **Plugin Sources**: `(Require: LavaLink v3.6.x)`

## 📚 Commands

<details><summary>Click to View Commands</summary>

| Name        | Description                              | Options                                   |
|-------------|------------------------------------------|-------------------------------------------|
| `help`        | Shows the help menu                       | `command`: The command you want to get info  |
| `language`    | Setup guild language                      | `langCode`: Global Code of Your Language                                          |
| `lyrics`    | Get lyrics for the currently playing song   |                                           |
| `invite`      | Sends the bot's invite link               |                                           |
| `ping`        | Shows the bot's ping                      |                                           |
| `clearqueue`  | Clears the queue                          |                                           |
| `join`        | Joins the voice channel                   |                                           |
| `leave`       | Leaves the voice channel                  |                                           |
| `nowplaying`  | Shows the currently playing song          |                                           |
| `play`        | Plays a song from YouTube or Spotify      | `song`: The song you want to play            |
| `pause`       | Pauses the current song                   |                                           |
| `queue`       | Shows the current queue                   |                                           |
| `remove`      | Removes a song from the queue             | `song`: The song number                      |
| `resume`      | Resumes the current song                  |                                           |
| `seek`        | Seeks to a certain time in the song        |                                           |
| `shuffle`     | Shuffles the queue                        |                                           |
| `skip`        | Skips the current song                    |                                           |
| `skipto`      | Skips to a specific song in the queue      |                                           |
| `stop`        | Stops the music and clears the queue      |                                           |
| `volume`      | Sets the volume of the player             | `number`: The volume you want to set         |

</details>

## 🔧 Requirements

Before starting with the installation, you need to have the following:

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [v18.16.0 or higher](https://nodejs.org/en/download/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [v3.7.5 or higher](https://github.com/freyacodes/Lavalink)

## 🚀 Installation from source

1. Clone the advanced-music-bot repository:
  
  ```bash
  git clone  https://github.com/Bes-js/advanced-music-bot.git
```

2. change the directory to Lavamusic

```bash
cd advanced-music-bot
```

3. Install the required packages:

```bash
npm install
```

4. Set up your config.json file:

  ```json
{
  "token":"Your Discord Bot Token",
  "prefix": ".",

  "clientID": "Spotify clientID",
  "clientSecret": "Spotify clientSecret",
  "nodes": [
    {
    "host" : "narco.buses.rocks",
    "port" : 2269,
    "password" : "glasshost1984",
    "secure" : false
    }
  ]
}
```

5. Run the bot:
  
  ```bash
  npm run start or npm start
```

6. Invite the bot to your server:

Generate an invite link for your bot and invite it to your server using the Discord Developer Portal or using permissions calculator: <https://discordapi.com/permissions.html>

Do note that the bot will restart itself to update to the latest!

## 🔗 Useful Links

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [Node.js](https://nodejs.org/en/download/)
- ![Discord.js](https://img.shields.io/badge/Discord.js-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Discord.js](https://discord.js.org/#/)
- ![Lavalink](https://img.shields.io/badge/Lavalink-7289DA?style=for-the-badge&logo=discord&logoColor=white) [Lavalink](https://github.com/freyacodes/Lavalink)
- [All Language Codes](https://www.loc.gov/standards/iso639-2/php/code_list.php)

## 🔐 License

Distributed under the GPL-3.0 license License. See ![LICENSE](https://img.shields.io/github/license/Bes-js/advanced-music-bot?style=social) for more information.

## 🔵 My Discord Profile
<a href="https://discord.com/users/928259219038302258"><img  width="250px" src="https://luppufy.onrender.com/member/928259219038302258?border=ff0000"></a> 

## ☕ Donate & ❓ Support
Do you like this project? Support it by donating

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
<br> </br>
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>
<br> </br>
<br> </br>
<br> </br>
💗 Readme Section Extracted from brblacky.

[version-shield]: https://img.shields.io/github/package-json/v/Bes-js/advanced-music-bot?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/Bes-js/advanced-music-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/Bes-js/advanced-music-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Bes-js/advanced-music-bot.svg?style=for-the-badge
[forks-url]: https://github.com/Bes-js/advanced-music-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/Bes-js/advanced-music-bot.svg?style=for-the-badge
[stars-url]: https://github.com/Bes-js/advanced-music-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/Bes-js/advanced-music-bot.svg?style=for-the-badge
[issues-url]: https://github.com/Bes-js/advanced-music-bot/issues
[license-shield]: https://img.shields.io/github/license/Bes-js/advanced-music-bot.svg?style=for-the-badge
[license-url]: https://github.com/Bes-js/advanced-music-bot/blob/master/LICENSE
