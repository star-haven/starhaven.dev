import type { PageLoad } from './$types';

export const load = (async () => {
	const data = await fetch('https://discord.com/api/guilds/279322074412089344/widget.json')
		.then((res) => res.json())
		.catch((error) => {
			console.warn('Error fetching Discord widget data', error);
			return Promise.resolve(undefined);
		});

	return {
		discordPresenceCount: data?.presence_count as number | undefined
	};
}) satisfies PageLoad;
