module.exports = async (client, node, error) => {
	if(error.message.includes("Unexpected op"))return;
	console.log("[🔴] Lavalink / Node Disconnected! Reason; " + error.message)
}