import { writable } from 'svelte/store';
import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";

export const user = writable(null);

async function setup() {
    try {
        const response = await SvelteKitAuth({
            providers: [
                Discord({
                    clientId: process.env.DISCORD_CLIENT_ID,
                    clientSecret: process.env.DISCORD_CLIENT_SECRET,
                })],
        });
        //console.log(response);
        user.set(response);
    } catch (error) {
        console.log("There was an error:")
        console.log(error);
    }
}

setup();
