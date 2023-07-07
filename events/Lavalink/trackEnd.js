module.exports = async (client, player, track, playload) => {
player.set("autoplay", false);
var res = await player.search(`https://www.youtube.com/watch?v=${player.queue.current.identifier}&list=RD${player.queue.current.identifier}`,player.get("requester"));
await player.queue.add(res.tracks[2]);
}