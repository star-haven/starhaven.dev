<script type="ts">
    import "../app.css";

    import Diorama from "./Diorama.svelte";

    // https://geoffrich.net/posts/page-transitions-1/
    import { preparePageTransition } from "$lib/page-transition";
    preparePageTransition();

    // Vercel Web Analytics
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        rel="stylesheet"
    />

    <meta name="darkreader-lock" />
</svelte:head>

<a href="#top" class="sr-only focus:not-sr-only">Skip to content</a>

<div class="min-h-screen flex flex-col text-gray-700">
    <slot />

    <footer class="p-6 text-sm max-w-prose" style:--tag="footer">
        <p>
            Star Haven is an independent community of fans and is not affiliated
            with or endorsed by Nintendo or Intelligent Systems. Any mentions of
            PAPER MARIO is for informational purposes only and does not imply
            any association with or endorsement by Nintendo. All rights belong
            to their respective owners.
        </p>
        <!--<p class="mt-1">
            Background rendering by <a href="https://noclip.website">noclip.website</a>, a digital museum of video game levels.
        </p>-->
        <p class="mt-1">
            Contact: <a href="mailto:admin@starhaven.dev">admin@starhaven.dev</a
            >
        </p>
    </footer>
</div>

<style>
    :root {
        font-family: "Itim", system-ui, sans-serif;
    }

    footer {
        /* Shadow to make white text visible on any background */
        text-shadow: 0 0 16px #ffffff66, 0 0 4px #00000044, 0 0 4px #00000044,
            0 0 2px #ffffff44;
    }

    a {
        color: black;
        text-decoration: underline;
    }
</style>
