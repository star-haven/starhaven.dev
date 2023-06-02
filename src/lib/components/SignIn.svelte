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

<nav aria-label="Session" class="self-end p-3">
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
            <a
                href="/profile"
                title="View profile"
            >
                <img
                    src="{$page.data.session.user.image}"
                    alt="You"
                    class="rounded-full"
                />
            </a>
        {/if}
    {:else}
        <Button on:click={signIn}>Sign in</Button>
    {/if}
</nav>

{#if showSignOutButton}
    {#if $page.data.session}
    <nav aria-label="SignOut" class="signout-button">
        <Button on:click={signOut}>Sign out</Button>
    </nav>
    {/if}
{/if}
