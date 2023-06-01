
<script lang="ts">
  import { page } from "$app/stores";

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
                style="background-image: url('{$page.data.session.user
                    .image}');"
                on:click={() => (showSignOutButton = true)}
            />
        {/if}
    {:else}

<div class="signin-button" on:click={signIn}>
    Sign In
</div>
{/if}

{#if showSignOutButton}
        {#if $page.data.session}
            <button class="sign-out-button" on:click={signOut}>Sign out</button>
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
        border: 2px solid black;
    }
    .signin-button {
        position: fixed;
        top: 10px;
        right: 10px;
        cursor: pointer;
        background-color: #444;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
    }
    .sign-out-button {
        position: fixed;
        top: 80px;
        right: 20px;
    }
</style>