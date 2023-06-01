<script lang="ts">
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import { page } from "$app/stores";
	let showSignInButton = false;
	import Signin from "$lib/components/Signin.svelte";
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
<Signin />

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
</style>
