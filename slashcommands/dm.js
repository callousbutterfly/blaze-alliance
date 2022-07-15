const run = async (client, interaction) => {
    let msg = interaction.options.getString("msg");
    let auth = interaction.options.getMember("user");

    auth.send(`${msg}`);

    interaction.reply({
        content: `Command successfully run!`,
        ephemeral: true,
    });
};

export default {
    name: "dm",
    description: "Set bot activity",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "user",
            description: "User to send Direct Message To",
            type: "USER",
            required: true,
        },
        {
            name: "msg",
            description: "Message to send",
            type: "STRING",
            required: true,
        },
    ],
    run,
};
