<script>
    import { page } from "$app/stores";
    import LinkButton from "./LinkButton.svelte";

    import { Icon } from "svelte-awesome";
    import { faHome } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="flex grow flex-col items-center justify-center p-4" id="top">
    <main
        class="mx-10 my-4 p-6 pb-9 text-center text-lg sm:text-xl md:text-2xl"
        style:--tag="paperbanner"
    >
        <h1>Error {$page.status}: {$page.error?.message}</h1>
    </main>
    <LinkButton href="/">
        <Icon data={faHome} scale={1.1} class="mr-2" />
        Homepage
    </LinkButton>
</div>

<style>
    main {
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
