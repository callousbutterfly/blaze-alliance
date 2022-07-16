import { createInfoEmbed } from "../util/embedFactory.js";

const run = async (client, interaction, guildID) => {
    let num = Math.floor(Math.random() * 2);
    if (num == 0)   
      interaction.reply({
            embeds: [createInfoEmbed("You flipped a coin!", "The coin was... Heads!")],
        });
    else if (num == 1)
        interaction.reply({
            embeds: [createInfoEmbed("You flipped a coin!", "The coin was... Tails!")],
        });
};

export default {
    name: "coinflip",
    description: "Flips a coin",
    perm: "",
    options: [],
    run,
};
