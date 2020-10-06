module.exports = {

    name: 'embed',
    
    description: 'shows the bots uptime',
    
    execute(message,args,Discord){

const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Welcome to the server!')
    .setDescription('Welcome to Just a bot support server. \n Here you can ask questions about the bot or report bugs!')
    .setTimestamp()

message.channel.send(exampleEmbed);

    
    }
}