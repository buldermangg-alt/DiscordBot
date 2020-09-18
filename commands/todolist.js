module.exports = {
    name: 'todolist',
    description: "The upcoming commands and things!",
    execute(message,args){
message.channel.send({ content: "", embed: {title: "New commands coming soon!"}})
    }
}