import discordPresence from 'discord-rpc';
import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { format } from 'url';
import { Client } from 'discord.js';
import { config } from 'dotenv';
import { readdirSync } from 'fs';
import { join as joinPath } from 'path';
import { Collection } from 'discord.js';
import { Player } from 'discord-player';
import { MessageEmbed } from 'discord.js';
import { MessageAttachment } from 'discord.js';
import { Message } from 'discord.js';
import { MessageActionRow } from 'discord.js';
import { MessageButton } from 'discord.js';
import { MessageEmbedOptions } from 'discord.js';
import { MessageButtonOptions } from 'discord.js';



static void UpdatePresence()

{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Spielt an deiner Mum";
    discordPresence.details = "Locker";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.endTimestamp = 1507665886;
    discordPresence.largeImageText = "Numbani";
    discordPresence.smallImageText = "Rogue - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 1;
    discordPresence.partyMax = 5;
    discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
    Discord_UpdatePresence(&discordPresence);
}