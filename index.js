const { Client } = require('discord.js')
const client = new Client({
    fetchAllMembers: true
}); 

client.on('ready', async () => {
    console.log(`${client.users.cache.size}`)
    client.users.cache.array().forEach(async (member) => {
        await deleteOldMessages(await member.createDM().catch(err => { }));
 
        console.log(`${member.tag} | ${member.id}`)
    });

})
client.login('token')

async function deleteOldMessages(channel) {
    try {
        channel.messages.fetch({ limit: 50 }).then(messages => {
            messages.forEach(m => m.delete())
        })
    } catch (err) {

    } 
} 