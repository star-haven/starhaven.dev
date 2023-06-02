import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";

export const handle = SvelteKitAuth({
    providers: [
        // auth.js's types seem to be broken
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID || DISCORD_CLIENT_ID,
            clientSecret:
                process.env.DISCORD_CLIENT_SECRET || DISCORD_CLIENT_SECRET,
        }),
    ],
    theme: {
        colorScheme: "auto",
        brandColor: "#ffd159",
    },
});
