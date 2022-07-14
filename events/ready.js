module.exports = {
    name: "ready",
    run: async (bot, client, guild) => {
        console.log("Logged in as " + bot.client.user.tag)
    }
}