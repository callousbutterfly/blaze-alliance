const { MessageEmbed } = require("discord.js")

module.exports = {
    createErrorEmbed(title, description, fields = []) {
        return new MessageEmbed()
            .setTitle(`❌ ${title}`)
            .setColor(0xc10037)
            .setDescription(description)
            .setFields(fields)
    },
    createInfoEmbed(title, description, fields = []) {
        return new MessageEmbed()
            .setTitle(`${title}`)
            .setColor(0x2f6fab)
            .setDescription(description)
            .setFields(fields)
    },
    createSuccessEmbed(title, description, fields = []) {
        return new MessageEmbed()
            .setTitle(`${title}`)
            .setColor(0x00c850)
            .setDescription(description)
            .setFields(fields)
    }

}