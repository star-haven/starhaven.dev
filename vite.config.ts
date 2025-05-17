import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        enhancedImages(),
        sveltekit(),
        SvelteKitPWA({
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
