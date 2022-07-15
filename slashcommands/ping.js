const { createInfoEmbed } = require("../util/embedFactory")

const run = async (client, interaction) => {
    interaction.reply({ embeds: [createInfoEmbed("🏓 Pong!", `Responded in **${client.ws.ping}ms**.`)] })
}

module.exports = {
    name: "ping",
    description: "Sends Pong!",
    perm: "",
    options: [],
    run
}