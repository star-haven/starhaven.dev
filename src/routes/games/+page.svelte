<script lang="ts">
    import { arr as games } from "./games";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
</script>

<Breadcrumbs />

<div
    class="flex w-full max-w-xl grow flex-col items-center gap-16 self-center p-4"
    id="top"
>
    <header class="max-w-sm">
        <h1 class="text-4xl font-semibold">
            <!-- todo banner -->
            Games
        </h1>

        <p class="mt-2 leading-tight">
            There are many Paper Mario games! Click on one below to learn about
            it.
        </p>
    </header>

    <main class="self-stretch">
        <ol class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {#each games as game}
                <li>
                    <a
                        href={game.url}
                        class="game flex h-full w-full items-center justify-center"
                    >
                        <div style:--tag={game.viewTransitionTag}>
                            <!-- TODO use picture tag -->
                            <img
                                src={game.boxArtUrl}
                                alt="Box art"
                                class="max-h-60"
                            />

                            <div class="details leading-tight text-white">
                                <h2 class="text-xl leading-5">{game.name}</h2>
                                <div class="mt-2 text-sm opacity-80">
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
        position: relative;

        img {
            --base-transform: perspective(1000px);
            transform: var(--base-transform);
            transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        &:hover,
        &:focus {
            &[href] img {
                transform: var(--base-transform) rotate3d(0, 1, 0, 30deg) translate3d(0, 0, 5px);
            }
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
