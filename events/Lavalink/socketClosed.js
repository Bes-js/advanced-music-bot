module.exports = async (client, player, payload) => {
    if (payload.byRemote !== true) return;
    console.log(`[⚠️] Socket Disconnected.`)
}