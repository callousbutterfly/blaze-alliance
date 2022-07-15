import { MessageEmbed } from "discord.js";

const run = async (client, interaction, member) => {
    let title = interaction.options.getString("title");
    let text = interaction.options.getString("text");
    let channel = interaction.options.getChannel("channel");
    let color = interaction.options.getString("color");
    let footer = interaction.options.getString("footer");

    const embedMessage = new MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${text}`);

    if (footer !== null)
        // for no robot crash / null footer
        embedMessage.setFooter({ text: `${footer}` });
    if (color !== "" && color !== null)
        // No robot crashes here :3
        embedMessage.setColor(`${color}`);

    channel.send({ embeds: [embedMessage] });

    interaction.reply({ content: `Embedded Sent`, ephemeral: true });
};

export default {
    name: "embed",
    description: "Send an embeded message",
    perm: "ADMINISTRATOR",
    options: [
        {
            name: "title",
            description: "Title of message",
            type: "STRING",
            required: true,
        },
        {
            name: "text",
            description: "Content of message",
            type: "STRING",
            required: true,
        },
        {
            name: "channel",
            description: "Channel to send in",
            type: "CHANNEL",
            required: true,
        },
        {
            name: "color",
            description: "color",
            type: "STRING",
            required: false,
        },
        {
            name: "footer",
            description: "Footer of message",
            type: "STRING",
            required: false,
        },
    ],
    run,
};
