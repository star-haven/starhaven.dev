<script lang="ts">
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import { page } from "$app/stores";
    let showSignInButton = false;

    const mods = [
        {
            name: "Paper Mario: Master Quest",
            description:
                'Considered "The Dark Souls of Paper Mario", Master Quest is incredibly difficult. It was designed with elite challenge runners in mind, and unless you have extensive knowledge of Paper Mario, you may struggle with much of the content.',
            link: "https://github.com/Brotenko/PMMasterQuest",
        },
        {
            name: "Paper Mario Mod 2",
            description: "This is a description of Mod 2.",
            link: "#",
        },
    ];

    function signIn() {
        window.location.href = "/auth/signin";
    }
    function signOut() {
        window.location.href = "/auth/signout";
    }
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

    <main class="self-stretch">
        <ul class="mod-list">
            {#each mods as mod (mod.name)}
                <li class="mod-list-item">
                    <div class="mod-name">
                        <a href={mod.link}>{mod.name}</a>
                    </div>
                    <div class="mod-description">{mod.description}</div>
                </li>
            {/each}
        </ul>
    </main>
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
            <div
                class="user-icon"
                style="background-image: url('{$page.data.session.user
                    .image}');"
                on:click={() => (showSignInButton = true)}
            />
        {/if}
    {:else}
        <div
            class="user-icon"
            style="background-image: url(https://cdn.discordapp.com/attachments/864662712088657960/1113501659398684692/guest.png);"
            on:click={() => (showSignInButton = true)}
        />
    {/if}

    {#if showSignInButton}
        {#if $page.data.session}
            <button class="sign-in-button" on:click={signOut}>Sign out</button>
        {:else}
            <button class="sign-in-button" on:click={signIn}>Sign in</button>
        {/if}
    {/if}
</div>

<style>
    .mod-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mod-list-item {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        width: 80%;
        max-width: 500px;
    }

    .mod-name {
        font-weight: bold;
        color: #007bff;
        margin-bottom: 10px;
    }

    .mod-name a {
        text-decoration: none;
        color: inherit;
    }

    .mod-description {
        color: #666;
    }

    .user-icon {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        border: 2px solid black;
    }

    .sign-in-button {
        position: fixed;
        top: 80px;
        right: 20px;
    }
</style>
