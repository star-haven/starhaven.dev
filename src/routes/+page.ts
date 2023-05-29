import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const data = await fetch('/api/discord/widget.json')
		.then((res) => res.json())
		.catch((error) => {
			console.warn('Error fetching Discord widget data', error);
			return Promise.resolve(undefined);
		});

	return {
		discordPresenceCount: data?.presence_count as number | undefined
	};
}) satisfies PageLoad;
