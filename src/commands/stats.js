const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);

      let hours = Math.floor(client.uptime / 3600000) % 24;

      let minutes = Math.floor(client.uptime / 60000) % 60;

      let seconds = Math.floor(client.uptime / 1000) % 60;

      let ramUsage = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + "MB";

   
const stats = new Discord.MessageEmbed() 
.setColor('32cd32')
.setTitle('**__GrowFormer Stats__**') 
.addField(`❯Latency:`, `${Date.now() - message.createdTimestamp}ms`) 
.addField(`❯API Latency:`, `${Math.round(client.ws.ping)}ms`) 

.addField(`❯Uptime:`, `${days}d ${hours}h ${minutes}m ${seconds}s`) 
.addField(`❯Ram Usage:`, `${ramUsage}`) 
.setFooter('GrowFormer Stats') 
.setThumbnail(client.user.displayAvatarURL())
message.channel.send(stats) 

} 
module.exports.config = {
    name: 'stats',
    description: 'show some statistics about the bot',
    usage: 'gt!stats',
    botPerms: [],
    userPerms: [],
    aliases: ['bot-stats', 'ping']
}