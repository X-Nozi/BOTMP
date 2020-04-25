const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var bot = new Discord.Client();




bot.on('ready', () => {
    console.log(`===========================================================`)
    console.log(`Ci-dessous se trouve les [LOGS] !`)
    console.log(`===========================================================`)
    console.log(`[LOGS] ${bot.user.username} Le Self est en ligne !`)
    console.log(`[LOGS] ${bot.user.username} prêt à utiliser vos commandes !`)
    console.log(`===========================================================`)


})
bot.on('message', message => {
    let prefix = botconfig.prefix;

    
     if (message.content === prefix + "mp"){
        if(message.channel.type === "dm") return;
        if(message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send("ta pub ou le message que tu veux faire passer a tout le monde")
    }
    
    
)}


});
client.login (process.env.TOKEN1);