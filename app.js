import { rollDice } from "./functions/index.js";
import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const inputs = message.content.split(" ");
  if (inputs[0] !== "roll") return;
  const numDice = inputs[1];
  const numSides = inputs[2];
  if (isNaN(numDice) || isNaN(numSides)) return;
  if (numDice > 20 || numDice < 1 || numSides < 1 || numSides > 20) return;
  message.channel.send(`You rolled ${rollDice(numDice, numSides)}`);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
