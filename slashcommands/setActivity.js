const run = async (client, interaction) => {
    let activity = interaction.options.getString("activity")
    client.user.setActivity(`${activity}`);
    interaction.reply({content:`Bot's Activity Set! - Playing ${activity}`, ephemeral:true})
}

module.exports = {
    name: "setactivity",
    description: "Set bot activity",
    perm: "ADMINISTRATOR",
    options: [{
        name: "activity",
        description: "Activity to set",
        type: "STRING",
        required: true
    }],
    run
}