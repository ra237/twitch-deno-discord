import { CommandClient, Command, Extension } from "./deps.ts"
import { CommandContext } from "https://deno.land/x/harmony@v2.5.1/mod.ts"
import { WatchStreamer } from "./src/commands/watchStreamer.ts"
import { generateUsageSubCommands } from "./src/utility/commandUsage.ts"

export class TwitchExtension extends Extension {
    name = "Twitch"
    constructor(client: CommandClient) {
        super(client)
        this.commands.add(new Twitch(client))
        console.log(`\t+ ${this.name} Extension loaded.`)
    }
}

export class Twitch extends Command {
    name = "Twitch"
    guildOnly = true
    usage = "**USAGE**: !twitch "
    description = "Base command for all twitch utility the bot provides."
    client: CommandClient

    constructor(client: CommandClient) {
        super()
        this.client = client
        this.subCommands = [ new WatchStreamer(client) ]
    }
    
    // this class will only execute when no valid sub-command is given
    execute(ctx: CommandContext): void {
        const subUsage = generateUsageSubCommands(this.getSubCommands())
        ctx.message.reply(this.usage + subUsage)
    }
}
