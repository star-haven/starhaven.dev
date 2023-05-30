import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		307,
		'https://star-haven.notion.site/bcf73c3dc118410ab6f98ae4ee7ec0c3?v=1ef649efa6e1450abdf9a4a20b805110'
	);
}
