module.exports = {
    name: 'credits',
    description: "The credits!",
    execute(message,args){
message.channel.send({ content: "The credits", embed: {title: "Bot made by Buldermangg#0189 \n Bot picture by Jax#1460"}})
    }
}