<header class="p-4 flex align-center items-center">
    <div class="max-w-2xl">
        <div class="flex justify-center items-center gap-2 text-white">
            <!--
            <img
                src="http://placekitten.com/200/200"
                alt="Star Haven logo"
                class="w-24 h-24 sm:w-32 sm:h-32"
            >
            --> <!-- TODO: Replace with actual logo and better alt text -->
            <h1 id="name" class="text-6xl sm:text-7xl lg:text-8xl font-bold lg">
                <!-- Welcome to? -->
                Star Haven
            </h1>
        </div>

        <p id="description" class="my-4 mx-10 p-6 pb-9 text-center text-lg sm:text-xl md:text-2xl">
            <!-- inline-block to break lines nicely -->
            <span class="sm:inline-block">The community of modders and reverse-engineers</span>
            <span class="sm:inline-block">crafting new and exciting Paper Mario experiences!</span>
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
    }
</style>
