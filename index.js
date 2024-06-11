require("dotenv").config()
const { Intents } = require("discord.js");
const Client = require("./Structures/Client.js");
const express = require('express');
const app = express();
app.listen(() => console.log("☺ ﻲﺒﻨﻟﺍ ﻰﻠﻋ ﻲﻠﺻ ﻙﺮﻛﺫﺍ"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1><h1><p>Made by : ' Hadaf ,</p>
  </body>`)
});
const client = new Client({
  partials: ['MESSAGE', 'CHANNEL'],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

module.exports = client;

require("./Structures/Event")(client)
require("./Structures/slashCommand")(client)

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  // Define a list of keywords and their corresponding responses
  const autoReplies = {
    'السلام عليكم': 'وعليكم السلام منور/ه يا قمر🤍',
 'شعار': '𝙎𝟳',
    'باك': 'ولكم منور/ه يا قمر🤍',
    'بروح': 'الله معك تروح و ترجع بالسلامة🤍',
    'برب': 'تيت تروح و ترجع بالسلامة🤍',
 'قوانين!': 'https://discord.com/channels/1217441074377789460/1217522755512303626 ',
 'تكت!': 'https://discord.com/channels/1217441074377789460/1224754077389295716 ',
 'تبادل!': 'https://discord.com/channels/1217441074377789460/1231418049635160094 ',
 'شات': 'https://discord.com/channels/1217441074377789460/1217448109857046599 ',

  };

  // Iterate through the keywords and check if the message contains any of them
  for (const keyword in autoReplies) {
    if (message.content.toLowerCase().includes(keyword)) {
      // Send a reply if a keyword is found
      await message.reply(autoReplies[keyword]);
      break; // Stop after finding a match
    }
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  // Define the image URL 
  const imageURL = 'https://media.discordapp.net/attachments/1235147691281879090/1247152405594767381/597410282666459138.png?ex=6668dff0&is=66678e70&hm=381e3de5e0b31f71d843802c335425e9247ec1fef408cbc9ac79836f34562fae&';

  // Check if the message content is "خط"
  if (message.content.toLowerCase() === 'خط+') {
    // Send the image URL as a reply
    await message.reply(imageURL);
  }
});

client.login(process.env.TOKEN);