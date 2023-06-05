<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Button from "$lib/components/Button.svelte";
    import { signOut } from "@auth/sveltekit/client";

    function home() {
        window.location.href = "/";
    }
    onMount(() => {
        if (!$page.data.session) {
            home();
        }
    });
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<div class="flex flex-col items-center justify-center p-8">
    {#if $page.data.session}
        <div class="flex flex-col items-center">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                class="mb-4 h-36 w-36 rounded-full object-cover"
                src={$page.data.session.user?.image}
                alt="User image"
            />
            <h2 class="text-center text-3xl">
                {$page.data.session.user?.name}
            </h2>
        </div>
        <nav aria-label="SignOut" class="mt-8">
            <Button on:click={signOut}>Sign out</Button>
        </nav>
    {/if}
</div>
