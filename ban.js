module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned!");
        }else{
            (message.channel.send('You coudnt ban that member! (Error. Either the bot is haywire or that user isnt in the server!'));
        }
    }
  }
