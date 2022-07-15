const run = async (client, interaction) => {
    let number = interaction.options.getNumber("num");
    let txtChannel = interaction.options.getChannel("channel");

    interaction.channel = txtChannel;

    if (txtChannel === null) txtChannel = interaction.channel;

    txtChannel.bulkDelete(number);
    interaction.reply({
        content: `Successfully deleted ${number} messages from ${txtChannel}!`,
        ephemeral: true,
    });
};

export default {
    name: "purge",
    description: "Delete messages in bulk",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "num",
            description: "Number of messages to delete",
            type: "NUMBER",
            required: true,
        },
        {
            name: "channel",
            description: "Channel to delete",
            type: "CHANNEL",
            required: false,
        },
    ],
    run,
};
