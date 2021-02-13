const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

PASTE ALL OF THAT AFTER CONST PREFIX


COMMANDS!


    if (command === 'ban'){
        client.commands.get('ban').execute(message, args);

    }
    
        if (command === 'kick'){
        client.commands.get('kick').execute(message, args);

    }
    
