const Discord = require("discord.js")
require("dotenv").config()

//const TOKEN = "MjgyMzQxNzE3MjY3NzA5OTUy.Gqoqhx.A66n2jM12rT6cI3GfPZBxrvnhxF2gEANdpL-WM" // Bot Token blaze 1
const TOKEN = "OTkxODk4MDQ5ODI1NzM4ODUz.GRPknj.3qy3fyni7A74y7fb7xtZuxOItclWoqHxIve6S0" // Bot Token Blaze 3 (IN SERVER)

const guildID = "915336884257968169" // Blaze Alliance Server ID
//const guildID = "996295418025627728" // Test Server ID

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
    owners: ["272288647699496960"]
} 

module.exports = bot 
//const guild = client.guilds.cache.get(guildID)
//console.log(guild)

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
    const guild = client.guilds.cache.get(guildID)
    if(!guild)
        return console.error("Target guild not found")

    await guild.commands.set([...client.slashcommands.values()])
})



client.login(TOKEN)