<script lang="ts">
    import { arr as games } from "./games";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
</script>

<Breadcrumbs />

<div class="flex flex-col items-center gap-16 p-8 mx-auto max-w-7xl" id="top">
    <header class="max-w-2xl text-center">
        <h1 class="text-5xl font-bold text-blue-600">
            Games
        </h1>

        <p class="mt-4 text-lg text-gray-500" />
    </header>

    <main class="w-full">
        <ol class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {#each games as game}
                <li>
                    <a
                        href={game.url}
                        class="game flex flex-col items-start justify-start p-4 bg-white rounded-lg shadow-md hover:underline"
                        style:--tag={game.viewTransitionTag}
                    >
                        <img
                            src={game.boxArtUrl}
                            alt="Box art"
                            class="w-full h-auto mb-4 rounded-t-lg"
                        />

                        <div class="w-full">
                            <h2 class="text-2xl font-semibold text-gray-800">{game.name}</h2>
                            <p class="mt-1 text-gray-500">
                                {game.console}
                            </p>
                            <p class="text-sm text-gray-400">
                                {game.year}
                            </p>
                        </div>
                    </a>
                </li>
            {/each}
        </ol>
    </main>

    <p class="mt-6 text-sm text-gray-400">
        Box art courtesy of <a href="https://gamesdb.launchbox-app.com/" class="hover:text-blue-600">LaunchBox Games Database</a>
    </p>
</div>

<style>
    .game {
        transition: transform 0.3s ease-in-out;
    }

    .game:hover {
        transform: scale(1.05);
    }

    .game img {
        transition: transform 0.3s ease-in-out;
        height: 350px;
    }

    .game:hover img {
        transform: scale(1.05);
    }
</style>
