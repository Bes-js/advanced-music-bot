module.exports = async (client) => {
  client.manager.init(client.user.id);
  console.log(`${client.user.username} Ready!`)
}
