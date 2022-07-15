import { createInfoEmbed } from "../util/embedFactory.js";

const run = async (client, interaction, member) => {
    let target = interaction.options.getMember("user");
    let author = interaction.user;
    interaction.reply({
        embeds: [createInfoEmbed("👋 Slap!", `${author} slapped ${target}`)],
    });
};

export default {
    name: "slap",
    description: "Slaps a member",
    perm: "",
    options: [
        {
            name: "user",
            description: "User to slap",
            type: "USER",
            required: true,
        },
    ],
    run,
};
