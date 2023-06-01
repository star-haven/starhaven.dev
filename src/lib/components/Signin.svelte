<script lang="ts">
    import { page } from "$app/stores";
    import Button from "./Button.svelte";

    let showSignOutButton = false;

    function signIn() {
        window.location.href = "/auth/signin";
    }

    function signOut() {
        window.location.href = "/auth/signout";
    }
</script>

{#if $page.data.session}
    {#if $page.data.session.user?.image}
        <div
            class="user-icon"
            style="background-image: url('{$page.data.session.user.image}');"
            on:click={() => (showSignOutButton = true)}
        />
    {/if}
{:else}
    <nav aria-label="Session" class="self-end p-3">
        <!-- TODO: user-icon should be in this element too -->
        <Button on:click={signIn}>Sign in</Button>
    </nav>
{/if}

{#if showSignOutButton}
    {#if $page.data.session}
    <nav aria-label="SignOut" class="signout-button">
        <Button on:click={signOut}>Sign out</Button>
        </nav>
    {/if}
{/if}

<style>
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
    }
    .signout-button {
        position: fixed;
        top: 90px;
        right: 10px;
    }
</style>

