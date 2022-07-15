const run = async (client, interaction, guildID) => {
    let num = Math.floor(Math.random() * 2);
    if (num == 0)
        interaction.reply({
            content: `You flipped a coin! The coin was.. Heads!`,
            ephemeral: true,
        });
    else if (num == 1)
        interaction.reply({
            content: `You flipped a coin! The coin was.. Tails!`,
            ephemeral: true,
        });
};

export default {
    name: "coinflip",
    description: "Flips a coin",
    perm: "",
    options: [],
    run,
};
