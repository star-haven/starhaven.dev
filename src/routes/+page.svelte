<script type="ts">
    import LandingHeader from "./LandingHeader.svelte";
	import LinkButton from "./LinkButton.svelte";

    import Icon from "svelte-awesome";
    import { faDiscord, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
    //import { faDownload } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="grow p-2 sm:p-6 mx-auto flex flex-col gap-4 items-center justify-center">
    <LandingHeader />

    <nav class="w-full max-w-lg">
        <div class="flex gap-4 items-center justify-around mb-4">
            <LinkButton href="/discord" cta>
                <Icon data={faDiscord} scale={1.5} class="mr-2" />
                Join the Discord server!
            </LinkButton>
            <!--
            <LinkButton href="/tools">
                <Icon data={faDownload} scale={1} class="mr-2" />
                Tool downloads 
            </LinkButton>
            -->
        </div>
        
        <div class="flex gap-2 items-center justify-center">
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
