<script lang="ts">
    import type { PageData } from "./$types";

    import LandingHeader from "./LandingHeader.svelte";
    import LinkButton from "./LinkButton.svelte";
    import Icon from "svelte-awesome";
    import {
        faDiscord,
        faGithub,
        faTwitter,
        faYoutube,
    } from "@fortawesome/free-brands-svg-icons";
    import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";

    import Diorama from "./Diorama.svelte";

    export let data: PageData;
</script>

<Diorama />

<div
    class="mx-auto flex grow flex-col items-center justify-center gap-4 p-2 sm:p-6"
    id="top"
>
    <LandingHeader />

    <nav class="flex w-full max-w-lg flex-col gap-4">
        <div class="flex items-center justify-around gap-4">
            <div class="flex items-center justify-center gap-4">
                <LinkButton href="/discord" discordCta>
                    <Icon data={faDiscord} scale={1.5} class="mr-2" />
                    Join the community!
                </LinkButton>

                {#if data.discordPresenceCount}
                    <div
                        class="discord-presence-count flex flex-col items-center justify-center text-white"
                    >
                        <span class="text-2xl font-bold leading-6">
                            {data.discordPresenceCount.toLocaleString()}
                        </span>
                        <span class="text-sm leading-4">members online</span>
                    </div>
                {/if}
            </div>
        </div>
        <div class="flex items-center justify-center gap-2">
            <LinkButton href="/games">
                <Icon data={faPlay} scale={1} class="mr-2" />
                Games
            </LinkButton>
            <LinkButton href="/wiki">
                <Icon data={faBook} scale={1} class="mr-2" />
                Wiki
            </LinkButton>
            <!--
            <LinkButton href="/mods">
                <Icon data={faBook} scale={1} class="mr-2" />
                Mods
            </LinkButton>
            -->
        </div>
        <div class="flex items-center justify-center gap-2">
            <LinkButton href="/github">
                <Icon data={faGithub} scale={1.1} class="mr-1.5" />
                GitHub
            </LinkButton>
            <LinkButton href="/twitter">
                <Icon data={faTwitter} scale={1.1} class="mr-1.5" />
                Twitter
            </LinkButton>
            <LinkButton href="/youtube">
                <Icon data={faYoutube} scale={1.1} class="mr-1.5" />
                YouTube
            </LinkButton>
        </div>
    </nav>
</div>

<style>
    .discord-presence-count {
        text-shadow: 0 0 16px #00000022, 0 0 4px #00000044, 0 0 4px #00000044,
            0 0 2px #00000044;
    }
</style>
