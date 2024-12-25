<script type="ts">
    import "../app.css";

    // https://geoffrich.net/posts/page-transitions-1/
    import { preparePageTransition } from "$lib/page-transition";
    preparePageTransition();
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

<div class="flex min-h-screen flex-col text-gray-700">
    <slot />

    <footer class="max-w-prose p-6 text-xs opacity-50" style:--tag="footer">
        <p>
            Star Haven is an independent community of fans and is not affiliated
            with or endorsed by Nintendo or Intelligent Systems. Any mentions of
            PAPER MARIO is for informational purposes only and does not imply
            any association with or endorsement by Nintendo.
        </p>
        <!--<p class="mt-1">
            Background rendering by <a href="https://noclip.website">noclip.website</a>, a digital museum of video game levels.
        </p>-->
        <p class="mt-1">
            Contact: <a href="mailto:admin@starhaven.dev">
                admin@starhaven.dev
            </a>
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
