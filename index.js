import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
}); // intent permission

client.on("messageCreate", (message) => {
  console.log(message.content);
});

client.login(
  process.env.DISCORD_TOKEN
);
