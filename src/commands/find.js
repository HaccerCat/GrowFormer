const growapi = require('growapi');

const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send(`:x: Please provide something to search for`);
    growapi.search(`${message.content.toLowerCase().slice(7).trim()}`).then(data => {
        const doto = require('util').inspect(data)
const data1 = `${doto.length}`
const data2 = `2`
const datasub = parseInt(data1) - parseInt(data2)
const finaldata = require('util').inspect(data).slice(1, datasub) 
const findEmbed = new Discord.MessageEmbed() 
.setColor('32cd32')
         .setThumbnail(client.user.displayAvatarURL()) 
         .setDescription(`**__Result(s) for \`${message.content.toLowerCase().slice(7).trim()}\`:__**\n\`\`\`${finaldata}\`\`\``) 
         .setFooter('Growformer index') 
         .setTitle('Found Result(s)') 
message.channel.send(findEmbed) 



    
        

}).catch(error => {

    //  Handle the error here
message.channel.send(`:x: there is no item that have \`${message.content.toLowerCase().slice(7).trim()}\` in it\'s name`) 
    console.error(error);

});
}

module.exports.config = {
    name: 'find', 
   

    description: 'send a list of all items that are similar to what you provided',
    usage: 'gt!find <item name>',
    botPerms: [],
    userPerms: [],
    aliases: ['same', 'look']
}