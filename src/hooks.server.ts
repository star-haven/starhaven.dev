import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";

async function authorization({ event, resolve }) {
    if (event.url.pathname.startsWith("/authenticated")) {
        const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, "/login");
        }
    }

    return resolve(event);
}

export const handle: Handle = sequence(
    SvelteKitAuth({
        providers: [
            Discord({
                clientId: process.env.DISCORD_CLIENT_ID || DISCORD_CLIENT_ID,
                clientSecret: process.env.DISCORD_CLIENT_SECRET || DISCORD_CLIENT_SECRET,
            }),
        ],
    }),
    authorization,
);
