<script lang="ts">
    import { arr as games } from "./games";
    import Img from "@zerodevx/svelte-img";
</script>

<main class="w-full p-9">
    <ol class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each games as game}
            <li>
                <a
                    href={game.url}
                    class="game flex flex-col items-start justify-start rounded-lg bg-white p-4 shadow-md hover:underline"
                    style:--tag={game.viewTransitionTag}>
                    <Img
                        src={game.boxArtUrl}
                        alt="Box art"
                        class="mb-4 h-auto w-full rounded-t-lg" />

                    <div class="w-full p-4">
                        <h2 class="text-2xl font-semibold text-gray-800">
                            {game.name}
                        </h2>
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
    <style>
        .game img {
            width: 45%;
            transform: rotate3d(0, 1, 0, 25deg);
            transform-origin: 50% 50% 0;
            transform-style: preserve-3d;
            transition-duration: 300ms;
            margin: 0 auto;
        }
        .game:hover img {
            transform: rotate3d(0, 1, 0, 35deg);
        }
    </style>
</main>
