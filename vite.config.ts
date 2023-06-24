import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { imagetools } from "@zerodevx/svelte-img/vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        imagetools(),
        SvelteKitPWA({
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
        }),
    ],
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
