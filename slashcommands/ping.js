import { createInfoEmbed } from "../util/embedFactory.js";

const run = async (client, interaction) => {
    interaction.reply({
        embeds: [
            createInfoEmbed(
                "🏓 Pong!",
                `Responded in **${client.ws.ping}ms**.`
            ),
        ],
    });
};

export default {
    name: "ping",
    description: "Sends Pong!",
    perm: "",
    options: [],
    run,
};
