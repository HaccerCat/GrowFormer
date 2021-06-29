const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const info = new Discord.MessageEmbed() 
   .setColor('32cd32')
   .setDescription(`GrowFormer is a bot made by \`『🌟』S.B『🌟』#9838\` that shows info and server statistics for the game **growtopia**`) 
   .setTitle('GrowFormer info') 
   .setFooter('If you have questions join GrowFormer support server') 
   .setThumbnail(client.user.displayAvatarURL())
   message.channel.send(info) 
}

module.exports.config = {
    name: 'bot-info',
    description: 'Shows some info about the bot',
    usage: 'gt!bot-info',
    botPerms: [],
    userPerms: ['ADMINISTRATOR'],
    aliases: ['credit', 'botinfo']
}
