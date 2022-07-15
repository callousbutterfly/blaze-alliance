import { MessageEmbed } from "discord.js";

export const createErrorEmbed = (title, description, fields = []) => {
    return new MessageEmbed()
        .setTitle(`❌ ${title}`)
        .setColor(0xc10037)
        .setDescription(description)
        .setFields(fields);
};

export const createInfoEmbed = (title, description, fields = []) => {
    return new MessageEmbed()
        .setTitle(`${title}`)
        .setColor(0x2f6fab)
        .setDescription(description)
        .setFields(fields);
};

export const createSuccessEmbed = (title, description, fields = []) => {
    return new MessageEmbed()
        .setTitle(`${title}`)
        .setColor(0x00c850)
        .setDescription(description)
        .setFields(fields);
};
