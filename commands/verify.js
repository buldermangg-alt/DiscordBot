module.exports = {
    name: 'verify',
    description: "Verify!",
    execute(message,args){

        if (message.member.roles.cache.has('756415500673744988')){
            message.channel.send({ content: "", embed: {title: "You are already Verified!"}})
        }else {
            message.member.roles.add('756415500673744988').catch(console.error);
        }


    }
}
