const growapi = require('growapi');

const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    
    growapi.server().then(data => {

    const online = require('util').inspect(data.online)
    const gttime = require('util').inspect(data.time)
    const date = require('util').inspect(data.date)
    const world = require('util').inspect(data.wotdname)
    const world1 = `${world.length}`
    const world2 = `1`
    const worldsub = parseInt(world1) - parseInt(world2)
    const finalworld = require('util').inspect(data.wotdname).slice(1, worldsub) 
    const date1 = `${date.length}`
    const date2 = `1`
    const datesub = parseInt(date1) - parseInt(date2) 
    const finaldate = require('util').inspect(data.date).slice(1, datesub) 
    const time1 = `${gttime.length}`
    const time2 = `1`
    const timesub = parseInt(time1) - parseInt(time2) 
    const finaltime = require('util').inspect(data.time).slice(1, timesub) 
    const server = new Discord.MessageEmbed() 
  .setThumbnail(client.user.displayAvatarURL())
   .setTitle('**__Growtopia server stats__**') 
   .addField(`❯Date:`, `${finaldate}`) 
    .addField(`❯Gt Time:`, `\`${finaltime}\``) 
    .addField(`❯Online players:`, `\`${online}\``) 
    .addField(`❯World of the day`, `**${finalworld}**`) 
  
    
   .setFooter('Growformer GT server checker') 
   .setColor('32cd32')
    
       message.channel.send(server)
        

}).catch(error => {

    //  Handle error

    console.error(error);

});
}

module.exports.config = {
    name: 'server-stats',
    description: 'returns growtopia server statistics',
    usage: 'gt!server-stats',
    botPerms: [],
    userPerms: [],
    aliases: ['server', 'gt-stats']
}