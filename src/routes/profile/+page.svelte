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

<div class="profile-page">
    {#if $page.data.session}
        <div class="user-info">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                class="user-image"
                src={$page.data.session.user?.image}
                alt="User image"
            />
            <h2 class="user-name">{$page.data.session.user?.name}</h2>
        </div>
        <nav aria-label="SignOut" class="signout-button">
            <Button on:click={signOut}>Sign out</Button>
        </nav>
    {/if}
</div>

<style>
    .profile-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2em;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .user-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1em;
    }

    .user-name {
        font-size: 1.5em;
        text-align: center;
    }

    .signout-button {
        margin-top: 2em;
    }
</style>
