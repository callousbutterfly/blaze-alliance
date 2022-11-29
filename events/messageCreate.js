import Discord from "discord.js";

export default {
    name: "messageCreate",
    run: async function runAll(bot, message, guildID) {
        const { client, prefix, owners } = bot;

        // Nickname #name-and-number
        
            if (message.channel.name === "name-and-number") {
                if (message.content.includes("|")) {
                    let target = message.author;
                    const member = message.guild.members.cache.get(target.id);
                    const memUser = message.guild.members.cache.get(target);
                    const owner = message.guild.members.cache.find(
                        (member) => member.id === message.guild.ownerId
                    );

                    //let changed = message.guild.members.filter(mem=>{mem.displayName != mem.user.username})

                    if (member !== owner && !member.displayName.includes("|")) {
                        member.setNickname(message.content);
                        //member.send("Successfully changed you nickname, welcome to the server!")
                    }
                    //else if(member === owner){
                    //     message.reply({content: "You cannot change your user, you are the owner!", ephemeral: true})
                    //}
                    //else if(member.displayName.includes('|'))
                    //   message.reply({content: "Your nickname is already changed!", ephemeral: true})
                }
            }
        // End Nickname
        // Start Dm Reply System

        //📩Inbox Forwarding
            if(!message.guild){
                let messageContent = message.content;
                let messageAuthor = message.author;
                let mattTag = client.users.get("272288647699496960")

                mattTag.send(messageContent + messageAuthor.displayName())
            }




        //

        if (!message.guild) return;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        // const cmdstr = args.shift().toLowerCase();

        // let command = client.commands.get(cmdstr);
        // if (!command) return;

        // let member = message.member;

        // if (command.devOnly && !owners.includes(member.id)) {
        //     return message.reply("Bot Owner Only: Invalid permissions");
        // }

        // if (
        //     command.permissions &&
        //     member.permissions.missing(command.permissions).length !== 0
        // ) {
        //     return message.reply("Invalid permissions");
        // }

        // try {
        //     await command.run({ ...bot, message, args });
        // } catch (err) {
        //     let errMsg = err.toString();

        //     if (errMsg.startsWith("?")) {
        //         errMsg = errMsg.slice(1);
        //         await message.reply(errMsg);
        //     } else console.error(err);
        // }
    },
};
