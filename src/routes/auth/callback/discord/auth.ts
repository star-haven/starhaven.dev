
import { writable } from 'svelte/store';
import { Auth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";

export const user = writable(null);

async function setup() {
    const request = new Request("https://starhaven.dev"); 
    const response = await Auth(request, {
        providers: [
            Discord({
                clientId: process.env.DISCORD_CLIENT_ID,
                clientSecret: process.env.DISCORD_CLIENT_SECRET,
            }),
        ],
    });

    user.set(response);
}


setup();