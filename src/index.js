
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login('your_bot_token_here');

client.on('ready', () => {

    console.log(`${client.user.tag} is online!`);

    client.user.setPresence({

        status: 'available',

        activity: {

            name: 'gt!help',

            type: 'PLAYING',

            url: 'https://discord.com'

        }

    });

});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    const file = files.filter(f => f.split('.').pop() === 'js');
    if (file.length < 1) {
        console.log('No Commands.');
        return;
    }
    file.forEach(f => {
        const pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(aliases => client.aliases.set(aliases, pull.config.name));
    });
});

client.on('message', async message => {
    const prefox = "gt!";
    const prefix = prefox.toLowerCase();
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix)) {
        const messageArray = message.content.split(' ');
        const cmd = messageArray[0].toLowerCase() 
        const args = messageArray.slice(1);
        const command = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        if (command) {
            if (!command.config.botPerms) return console.log("You didn't provide botPerms");
            if (!Array.isArray(command.config.botPerms)) return console.log('botPerms must be an array.');
            if (!command.config.userPerms) return console.log("You didn't provide userPerms.");
            if (!Array.isArray(command.config.userPerms)) return console.log('userPerms must be an array.')
            if (!message.guild.me.hasPermission(command.config.botPerms)) {
                const beauty = command.config.botPerms.join('\`, \`'); 
                const noBotPerms = new Discord.MessageEmbed()
                    .setTitle('Missing Permissions')
                    .setDescription(`I am missing these permissions: \`${beauty}\`.`)
                    .setColor('RED');
                return message.channel.send(noBotPerms)
            }
            if (!message.member.hasPermission(command.config.userPerms)) {
                const beauty = command.config.userPerms.join('\`, \`');
                const noUserPerms = new Discord.MessageEmbed()
                .setTitle('Missing Permissions')
                .setDescription(`You are missing these permissions: \`${beauty}\`.`)
                .setColor('RED');
                return message.channel.send(noUserPerms)
            }

            command.run(client, message, args);
        }
    }
});
