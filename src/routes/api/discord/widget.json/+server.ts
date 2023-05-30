import type { RequestHandler } from "./$types";

export const GET = (async ({}) => {
    const res = await fetch(
        "https://discord.com/api/guilds/279322074412089344/widget.json",
    );
    const text = await res.text();

    return new Response(text, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}) as RequestHandler;
