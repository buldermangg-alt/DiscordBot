module.exports = {
    name: 'status',
    description: "The bot status!",
    execute(message,args,client,MessageEmbed,fs,os){
var uptime = client.uptime;var upHours = Math.floor(uptime/3600000);
var upMinutes = Math.floor((uptime-(upHours*3600000))/60000);
var upSeconds = Math.round((uptime-((upHours*3600000)+(upMinutes*60000)))/1000,0);
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
var UpdatedAt2 = String(fs.statSync(__filename).mtime).substring(0, String(fs.statSync(__filename).mtime).indexOf('('));
    
    var embed = new MessageEmbed()                         
        .setTitle(`Bot Status`)
//        .setThumbnail("https://i.imgur.com/z9j8Qs6.png")
        .setColor(0xFF9900)//https://i.imgur.com/z9j8Qs6.png
.setFooter(UpdatedAt2)
.setDescription(`Ping: ${client.ws.ping} ms
Uptime: ${upHours}h ${upMinutes}m ${upSeconds}s
Bot memory: ${Math.round(used * 100) / 100} MB
Total memory: ${Math.round(os.totalmem()/ 1024 / 1024)} MB 
Free memory: ${Math.round(os.freemem()/ 1024 / 1024)} MB`);
message.channel.send(embed);
    }
}