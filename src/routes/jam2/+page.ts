import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load = (async () => {
    redirect(308, "https://itch.io/jam/paper-mario-modding-jam-2");
}) satisfies PageLoad;
