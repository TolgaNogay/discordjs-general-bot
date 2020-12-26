module.exports = {
    name: "genelstat",
    aliases: ["redi", "redi"],
    description: "sdsdsdsdsdsd",
    usage: "redi",
    ownerOnly: true,

    run: async (message, args, client) => {

        message.channel.send(client.guilds.cache.size + " sunucuya ve " + client.users.cache.size + " kullanıcıya hizmet vermekte.")
    }
}