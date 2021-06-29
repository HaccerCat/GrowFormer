

const growapi = require('growapi');

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(`:x: Please provide something to show it's info`);
    

growapi.itemInfo(`${message.content.toLowerCase().slice(7).trim()}`).then(item => {

const iteminfo = require('util').inspect(item);

const itemimage = require('util').inspect(item.itemimage);
    const imagelength = `${itemimage.length}`;
    const imagenb = `2`;
    const imagesub = parseInt(imagelength) - parseInt(imagenb);
    const finalimage = require('util').inspect(item.itemimage).slice(1, imagesub);

    const itemprops = require('util').inspect(item.itemprops);

    const itemdesc = require('util').inspect(item.itemdesc);

    const itemexinfo = require('util').inspect(item.itemexinfo);

    const test1 = `${itemexinfo.length}`;

    const test2 = `2`;

const test = parseInt(test1) - parseInt(test2);

    const itemexinfo2 = require('util').inspect(item.itemexinfo).slice(1, test);

    const desc1 = `${itemdesc.length}`;

    const desc2 = `2`;

    const desco = parseInt(desc1) - parseInt(desc2);

    const finaldesc = itemdesc.slice(1, desco);

const prop1 = `${itemprops.length}`;
const prop2 = `2`;
    const propo = parseInt(prop1) - parseInt(prop2);
    const finalprops = require('util').inspect(item.itemprops).slice(1, propo);
    
 const iteminfoFull = new Discord.MessageEmbed() 

.setTitle('Item found!') 

.setColor('32cd32')
 .setThumbnail(`${finalimage}`)

.addField(`❯Description:`, `${finaldesc}.`) 

 .addField(`❯Properties:`, `${finalprops}.`) 

.addField(`❯Extra info:`, `${itemexinfo2}.`)

.setFooter('Growformer items book');

    message.channel.send(iteminfoFull) 

}).catch(error => {

    //   Handle Error

message.channel.send(':x: Item not found!');

    console.error(error);

});

}


module.exports.config = {

    name: 'info',

    description: 'shows item info',

    usage: 'gt!item',

    botPerms: [],

    userPerms: [],

    aliases: []

}