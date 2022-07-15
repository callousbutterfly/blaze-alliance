const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "/",
    owners: process.env.ADMINS
} 

module.exports = bot 

client.slashcommands = new Discord.Collection()
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false);

client.commands = new Discord.Collection()
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadCommands(bot, false)

client.events = new Discord.Collection()
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadEvents(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID)
    if(!guild)
        return console.error("Target guild not found")

    await guild.commands.set([...client.slashcommands.values()])
})



client.login(process.env.BOT_TOKEN)