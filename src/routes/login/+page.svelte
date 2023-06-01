<script lang="ts">
    import LinkButton from "../LinkButton.svelte";
    import Icon from "svelte-awesome";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";

</script>

<div class="login-wrapper">
    <div class="login-container">
        <h2>Login</h2>

        <form on:submit|preventDefault={login} class="login-form">
            <LinkButton href="https://discord.com/api/oauth2/authorize?client_id=1113277158543073381&redirect_uri=https%3A%2F%2Fstarhaven.dev%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email">
                <Icon data={faDiscord} scale={1} class="mr-2" />
                Sign In
            </LinkButton>
        </form>
    </div>
</div>

<style>
    .login-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f0f0;
    }

    .login-container {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    .login-form {
        display: flex;
        justify-content: center;
    }

</style>
