const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    const invite = new Discord.MessageEmbed() 
   .setColor('32cd32')
  .setDescription(`[Invite](https://discord.com/oauth2/authorize?client_id=844547986545180692&scope=bot&permissions=2214980673) GrowFormer to your server\n\n[Join](https://discord.gg/XBgyJhqnpq) Growformer support server`) 

   .setTitle('**__Invitation Links__**') 
   .setThumbnail(client.user.displayAvatarURL())
   .setFooter('GrowFormer Links') 
   message.channel.send(invite) 
}

module.exports.config = {
    name: 'invite',
    description: 'invite Growformer to share his knowledge in your server',
    usage: 'gt!invite',
    botPerms: [],
    userPerms: [],
    aliases: ['link', 'invite']
}
