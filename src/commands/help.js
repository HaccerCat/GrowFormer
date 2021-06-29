const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js');

const bot = new Discord.Client();

module.exports.run = async (client, message, args) => {

    if (!args[0]) {

        const commands = client.commands.filter(x => x.config.name !== 'help').map(x => x.config.name).join('\n');

      

                const embed = new Discord.MessageEmbed()

                    .setTitle('Loading...')

           .setColor('00FFFF')

           const msg = await message.channel.send(embed);

        try {

        const noArguments = new MessageEmbed()

            .setTitle('Commands')

           .setThumbnail(message.author.displayAvatarURL())

            .setDescription(`\`${commands}\``)

            .setColor('32cd32')

            .setFooter('Say gt!help [command] for more info about a command.');

                                       

            await msg.edit(noArguments)

            await msg.react('✅')

            await msg.react('❌')

            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);

            msg.awaitReactions(filter, { max: 1 })

                .then((collected) => {

                    collected.map((emoji) => {

                        switch (emoji._emoji.name) {

                            case '✅':

                                msg.reactions.removeAll();

                                break;

                            case '❌':

                                msg.delete()

                                break;

                        }

                    })

                })

        } catch (e) {

            const embed = new Discord.MessageEmbed()

                .setTitle('An Error has occured').setDescription(`**__Error:__**\n${e}`).setColor('FF0000')

            return await msg.edit(embed);

} 

    } else {

        const command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0]));

        if (command) {

                           const embed = new Discord.MessageEmbed()

            .setTitle('Loading...')

           .setColor('32cd32')

           const msg = await message.channel.send(embed);

        try {

            const foundEmbed = new MessageEmbed()

           .setThumbnail(message.author.displayAvatarURL())

                .addField('❯ Name', `${command.config.name}`, true)

                .addField('❯ Aliases', `\`${command.config.aliases.join('\`, \`') ? command.config.aliases : "No Aliases"}\``)

                .addField('❯ Usage', `\`${command.config.usage}\``, true)

                .addField('❯ Description', `${command.config.description}`)

                .addField('❯ Bot Permissions', `\`${command.config.botPerms.join('\`, \`') ? command.config.botPerms : "No Bot Permissions"}\``)

                .addField('❯ User Permissions', `\`${command.config.userPerms.join('\`, \`') ? command.config.userPerms : "No User Permissions"}\``)

                .setColor('32cd32');

                                           

            await msg.edit(foundEmbed)

            await msg.react('✅')

            await msg.react('❌')

            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);

            msg.awaitReactions(filter, { max: 1 })

                .then((collected) => {

                    collected.map((emoji) => {

                        switch (emoji._emoji.name) {

                            case '✅':

                                msg.reactions.removeAll();

                                break;

                            case '❌':

                                msg.delete()

                                break;

                        }

                    })

                })

        } catch (e) {

            const embed = new Discord.MessageEmbed()

                .setTitle('An Error has occured').setDescription(`**__Error:__**\n${e}`).setColor('FF0000')

            return await msg.edit(embed);

} 

        }

        if (!command) {

                      const embed = new Discord.MessageEmbed()

            .setTitle('Loading...')

           .setColor('32cd32')

           const msg = await message.channel.send(embed);

        try {

                const commandInvalidEmbed = new MessageEmbed()

               .setTitle(`**__Invalid Command__**`)

              .setColor('FF0000')

             .setThumbnail(message.author.displayAvatarURL())
.setTitle(':x: ERROR') 
            .setDescription(`:x: Command \`${message.content.slice(7).trim()}\` is not found`)

.setFooter('Make sure you entered correct command name')

                               

            await msg.edit(commandInvalidEmbed)

            await msg.react('✅')

            await msg.react('❌')

            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);

            msg.awaitReactions(filter, { max: 1 })

                .then((collected) => {

                    collected.map((emoji) => {

                        switch (emoji._emoji.name) {

                            case '✅':

                                msg.reactions.removeAll();

                                break;

                            case '❌':

                                msg.delete()

                                break;

                        }

                    })

                })

        } catch (e) {

            const embed = new Discord.MessageEmbed()

                .setTitle('An Error has occured').setDescription(`**__Error:__**\n${e}`).setColor('FF0000')

            return await msg.edit(embed);

} 

        }

    }

} 

module.exports.config = {

    name: 'help',

    description: 'sends help',

    usage: '=help [command]',

    botPerms: [],

    userPerms: [],

    aliases: []

}
