<script lang="ts">
    import logotype from "./starHavenLogotype.png";
</script>

<header class="align-center flex items-center p-4">
    <div class="max-w-2xl">
        <div class="flex items-center justify-center gap-2 text-white">
            <h1 id="name" class="lg text-6xl font-bold sm:text-7xl lg:text-8xl">
                <img src={logotype} alt="Star Haven" />
            </h1>
        </div>

        <p
            id="description"
            class="mx-10 my-4 p-6 pb-9 text-center text-lg sm:text-xl md:text-2xl"
        >
            <!-- inline-block to break lines nicely -->
            <span class="sm:inline-block"
                >The community of modders and reverse-engineers</span
            >
            <span class="sm:inline-block"
                >crafting new and exciting Paper Mario experiences!</span
            >
        </p>
    </div>
</header>

<style>
    #name {
        text-shadow: 0 2px 12px #00000066, 0 0 6px #ffffff44;
        font-weight: bold;
    }

    #description {
        background: white; /* fallback */
        background: url(paperbanner.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;

        color: #000;
        text-shadow: 0 0 2px #ffffff44;

        line-height: 1.1;

        animation: grow-in 300ms 200ms ease-out;
        animation-iteration-count: 1;
    }

    @keyframes grow-in {
        0% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
