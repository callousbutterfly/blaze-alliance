const run = async (client, interaction) => {
    interaction.reply(`Pong!`);
}

module.exports = {
    name: "ping",
    description: "Sends Pong!",
    perm: "",
    options: [],
    run
}