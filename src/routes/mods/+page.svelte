<script lang="ts">
    import { arr as games } from "./games";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
</script>

<Breadcrumbs />

<div
    class="grow self-center flex flex-col items-center gap-16 w-full max-w-xl p-4"
    id="top"
>
    <header class="max-w-sm">
        <h1 class="text-4xl font-semibold">
            <!-- todo banner -->
            Mods
        </h1>

        <p class="mt-2 leading-tight">
            Here is a list of mods for the various Paper Mario games. Click on a game to get started!
        </p>
    </header>

    <main class="self-stretch">
        <ol class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {#each games as game}
                <li>
                    <a
                        href={game.url}
                        class="w-full h-full flex items-center justify-center game"
                    >
                        <div style:--tag={game.viewTransitionTag}>
                            <!-- TODO use picture tag -->
                            <img
                                src={game.boxArtUrl}
                                alt="Box art"
                                class="max-h-60"
                            />

                            <div class="details text-white leading-tight">
                                <h2 class="text-xl leading-5">{game.name}</h2>
                                <div class="text-sm mt-2 opacity-80">
                                    {game.console}
                                </div>
                                <div class="text-sm opacity-80">
                                    {game.year}
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            {/each}
        </ol>
    </main>

    <p class="text-sm text-gray-400">
        Box art courtesy of <a
            href="https://gamesdb.launchbox-app.com/"
            class="hover:underline">LaunchBox Games Database</a
        >
    </p>
</div>

<style>
    .game {
        transform: scale(1);
        transition: transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1);

        position: relative;
    }

    .game[href] {
        &:hover,
        &:focus {
            transform: scale(1.03);
        }

        &:active {
            transform: scale(1.01) translateY(0.5px);
        }
    }

    .details {
        opacity: 0;
        transition: opacity 100ms ease-out;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 80%;
        text-align: center;

        text-shadow: 0 0 4px black;
    }

    .game:hover .details,
    .game:focus .details {
        opacity: 1;
    }
</style>
