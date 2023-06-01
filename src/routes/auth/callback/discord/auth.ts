import { writable } from 'svelte/store';
import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";

export const user = writable(null);

async function setup() {
    try {
        const response = await SvelteKitAuth({
            providers: [
                Discord({
                    clientId: DISCORD_CLIENT_ID,
                    clientSecret: DISCORD_CLIENT_SECRET,
                })],
        });
        //console.log(response);
        user.set(response);
    } catch (error) {
        console.log(error);
    }
}

setup();
