const growapi = require('growapi');
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send(`:x: Please provide something to send it's recipe`);

growapi.itemInfo(`${message.content.toLowerCase().slice(9).trim()}`).then(item => {
    
const itemrecipe = require('util').inspect(item.itemrecipe);
const itemimage = require('util').inspect(item.itemimage);
const recipelength = `${itemrecipe.length}`;
    const recipe2 = `1`;
    const recipesub = parseInt(recipelength) - parseInt(recipe2);
    const finalrecipe = require('util').inspect(item.itemrecipe).slice(1, recipesub);
    const imagelength = `${itemimage.length}`;

    const imagenb = `2`;

    const imagesub = parseInt(imagelength) - parseInt(imagenb);

    const finalimage = require('util').inspect(item.itemimage).slice(1, imagesub);
if (itemrecipe == "[ '' ]") { 
    message.channel.send(':x: This item does not have a recipe!') 
 } else {
const recipeEmbed = new Discord.MessageEmbed() 
.setColor('32cd32')
.setThumbnail(`${finalimage}`)
.setTitle('Recipe found!') 
.setDescription(`\`\`\`${finalrecipe}\`\`\``) 
.setFooter(`GrowFormer recipes book`) 


        

        

    message.channel.send(recipeEmbed) 
} 
}).catch(error => {

    //   Handle Error
message.channel.send(':x: Invalid item!') 
    console.error(error);

        
});
} 


module.exports.config = {

    name: 'recipe',

    description: 'shows item recipe',

    usage: 'gt!recipe <item name>',

    botPerms: [],

    userPerms: [],

    aliases: []

}