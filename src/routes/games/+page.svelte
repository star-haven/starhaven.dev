<script>
    import { arr as games } from "./games";
</script>

<main class="w-full">
    <ol class="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {#each games as game}
            <li>
                <a
                    href={game.url}
                    class="game flex flex-col items-start justify-start rounded-lg bg-white p-4 shadow-md hover:underline"
                    style:--tag={game.viewTransitionTag}
                >
                    <img
                        src={game.boxArtUrl}
                        alt="Box art"
                        class="mb-4 h-auto w-full rounded-t-lg"
                    />

                    <div class="w-full">
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
</main>

<style>

    .game {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 4px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        text-decoration: none;
    }

    .game img:hover {
        transform: rotate3d(0, 1, 0, 35deg);
    }

    .game img {
        width: 45%;
        height: auto;
        object-fit: cover;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        transform: rotate3d(0, 1, 0, 25deg);
        transform-origin: 50% 50% 0;
        transform-style: preserve-3d;
        transition-duration: 300ms;
        margin: 0 auto;
    }

    .game h2 {
        margin-top: 16px;
        font-size: 24px;
        color: #2d3748;
    }

    .game p {
        margin-top: 4px;
        color: #718096;
    }
</style>
