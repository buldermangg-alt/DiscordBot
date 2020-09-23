module.exports = {
    name: 'test',
    description: "This is a test command!",
    execute(message,args){
message.channel.send({ content: "", embed: {title: "Test works!"}})
    }
}