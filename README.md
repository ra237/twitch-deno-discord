![banner](https://user-images.githubusercontent.com/60703435/156765619-d764e19c-fd92-4117-8403-0dacd96cd638.png)

**THE Twitch Extension for your Deno-based [Harmony](https://deno.land/x/harmony) Discord Bot**  
* Notifies you if your favorite streamers go live
## Usage
In order to use this extension it is <ins>**crucial**</ins> to create a `.env` file in the root directory of your Harmony bot. Within that file you need to include your *client id* and *auth token* you got from Twitch:
```  
TWITCH_CLIENT_ID=
TWITCH_AUTH_TOKEN=
``` 

## Example
A minimal example of using this extension:
```js
import { CommandClient, Intents } from 'https://deno.land/x/harmony/mod.ts'
import { TwitchExtension } from 'https://deno.land/x/twitch-harmony/mod.ts'

const client = new CommandClient({
  prefix: '!'
})

// load the extension
client.extensions.load(TwitchExtension)

client.on('ready', () => {
  console.log(`Ready! User: ${client.user?.tag}`)
})

client.connect('mysecrettoken123', Intents.GuildMembers)
```
