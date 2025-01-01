import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(307, "https://youtube.com/@star-haven");
}
