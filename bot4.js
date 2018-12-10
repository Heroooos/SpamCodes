const Discord = require('discord.js');
//--------------------------------------------
var client = new Discord.Client();
const prefix = '4'
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client.on('ready', async() => {
var server = "521503720689762305"; // ايدي السررفر
var channel = "521503720689762307";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
    client.guilds.get(server).channels.get(channel).send('**abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , abdulaziz , **')
},305);
})



client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content === "t") {
        message.channel.send(`#credits <@175465689027444736> ${args}`)
    }
});


client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content === "c") {
        message.channel.send(`#credits`)
    }
});

client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content === "d") {
        message.channel.send(`#daily`)
    }
});
 


 
client.login(process.env.BOT_TOKEN);