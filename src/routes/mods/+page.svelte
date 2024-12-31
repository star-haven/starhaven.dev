<script lang="ts">
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import Mod from "$lib/components/Mod.svelte";
    // import Nav from "$lib/components/Nav.svelte";
    import { arr as mods } from "./mods";


    let searchTerm = "";

    let filteredMods: string | any[] = [];

    const searchMods = () => {
        return filteredMods = mods.filter(mod => {
            let modName = mod.displayName.toLowerCase();
            let modGame = mod.game.toLowerCase();
            let search = searchTerm.toLowerCase();
            return modName.includes(search) || modGame.includes(search);
        });
    };


    mods.sort();
</script>

<Breadcrumbs />

<div
    class="flex w-full max-w-xl grow flex-col items-center gap-16 self-center p-4"
    id="top"
>
    <header class="max-w-sm">
        <h1 class="text-4xl font-semibold">Mods</h1>

        <p class="mt-2 leading-tight">
            Here is a list of mods for the various Paper Mario games. Click on a
            game to get started!
        </p>
    </header>

    <div class="search">
        Search
        <div class="search-bar">
            <input type="text" id="search-bar-text" placeholder="Find a mod..." autocomplete="off" bind:value={searchTerm} on:input={searchMods}/>
        </div>
    </div>

    <div class="mod-browser flex flex-col gap-4">
        <div class="mod-list gap-8">
            {#if searchTerm == ""}
                {#each mods as {displayName, internalName, tagline, description, creators, releaseDate, lastUpdated, version, pageUrl, sourceUrl, iconUrl, downloadUrl, game, console, consoleCompatible, recommendedEmulator,modGroup,color}}
                    <Mod
                    {displayName}
                    {internalName}
                    {tagline}
                    {description}
                    {creators}
                    {releaseDate}
                    {lastUpdated}
                    {version}
                    {pageUrl}
                    {sourceUrl}
                    {iconUrl}
                    {downloadUrl}
                    {game}
                    {console}
                    {consoleCompatible}
                    {recommendedEmulator}
                    {modGroup}
                    {color}
                    />
                {/each}

            {:else if filteredMods.length === 0}
                No mods found!
            {:else}
                {#each filteredMods as {displayName, internalName, tagline, description, creators, releaseDate, lastUpdated, version, pageUrl, sourceUrl, iconUrl, downloadUrl, game, console, consoleCompatible, recommendedEmulator,modGroup,color}}
                    <Mod
                    {displayName}
                    {internalName}
                    {tagline}
                    {description}
                    {creators}
                    {releaseDate}
                    {lastUpdated}
                    {version}
                    {pageUrl}
                    {sourceUrl}
                    {iconUrl}
                    {downloadUrl}
                    {game}
                    {console}
                    {consoleCompatible}
                    {recommendedEmulator}
                    {modGroup}
                    {color}
                    />
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>
    .search-bar{
        background-color: #ddd;
        border-radius: 10px;
        padding: 0px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 500px;
        align-self:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    #search-bar-text{
        background-color: #ddd;
        padding:20px;
    }
    #search-bar-text:focus{
        outline:none;
    }
    .search{
        background-color:none;
        padding:none;
        box-shadow:none;
        margin:none;
        border-radius:none;
        align-self:center;
        width:80%;
    }
    .mod-list {
        width:90vw;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-items: flex-start;
        justify-content:center;
    }
</style>
