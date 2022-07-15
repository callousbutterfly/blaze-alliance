const run = async (client, interaction, guildID) => {
    const guild = client.guilds.cache.get(guildID);
    let role = interaction.guild.roles.cache.find(
        (role) => role.name === `Team Apps`
    ).id;
    // role = interaction.guild.members.cache.get(role).id
    const message = await interaction.reply({
        content: `<@&${role}>`,
        fetchReply: true,
        allowedMentions: { parse: ["users", "roles"] },
    }); // Creates message then mentions users
    message.react("👍");
    message.react("👎");
};

export default {
    name: "poll",
    description: "Starts a poll",
    perm: "ADMINISTRATOR",
    options: [],
    run,
};
