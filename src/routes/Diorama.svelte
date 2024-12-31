<script type="ts">
    import {
        persist,
        createLocalStorage,
    } from "@macfja/svelte-persistent-store";
    import { writable } from "svelte/store";

    const locations = {
        starHaven:
            "https://noclip.website/embed.html#pm64/hos_03;ShareData=AVN!+Uv9R!TWh2&ULgVpVWWMi5kQ2;UkqCQ8^0m&Vod=p9O6,:Tzu*^Ukd_nV[",
        spmMirrorHall:
            "https://noclip.website/embed.html#spm/mac_03;ShareData=AAyhLUja}e8(Uqt90C-z=pkbK6B[BbUZX309DlqZV7bVlUm6uDT2Cx@Uc]j0V[",
        ttydThousandYearDoor:
            "https://noclip.website/embed.html#ttyd/tik_05;ShareData=ALgk8Ugg7uSw/j98(@Oi=U=c?Qvv]4Ul=leS}aT{V38BzT1n_K8gYeVUkJg;WP",
        spmChamber:
            "https://noclip.website/embed.html#spm/he4_11;ShareData=AGRztUgqE)T==nt9LYxz=0,bv5i|~0UbAKcUAz_9Wo+K,UU1zj9gwI]Uqbu3WP",
        ttydMoon:
            "https://noclip.website/embed.html#ttyd/moo_01;ShareData=AC]xfUfDVHS,n*-8~T}pVJMbgQeE;xUuD3!TzY{mV_|@$T]/$Z8=VSJUwh9TV[",
        starSanctuary:
            "https://noclip.website/embed.html#pm64/hos_04;ShareData=AF5Ua8&eVa9A(zF94(Xe=GTkn5a4-$UsDrF8(;cFVcyv{UjQM{8fCZh8-1|OUw",
        //yoshiVillage: "https://noclip.website/embed.html#pm64/jan_02;ShareData=ALNtRUW$;hS9J]mUqVEyV9*@&5;mmOUlbI:8fay7VA])(97hZoS-N69Uqy2KVt",
    };

    const visitNumber = persist(
        writable(-1),
        createLocalStorage(),
        "visitNumber",
    );

    // increment visit number each visit
    $visitNumber += 1;

    const noclipLink =
        Object.values(locations)[
            $visitNumber % Object.values(locations).length
        ];
</script>

<svelte:head>
    <link rel="preconnect" href="https://noclip.website" />
</svelte:head>

<div class="background" aria-hidden>
    <!-- FIXME: firefox -->
    <iframe
        title="Diorama"
        src={noclipLink}
        class="h-full w-full"
        allowtransparency
        allowfullscreen
></iframe>
</div>

<style>
    .background {
        position: absolute;
        inset: 0;

        z-index: -1;

        /*pointer-events: none;*/

        /* Fallback in case iframe fails to load / is loading */
        background: linear-gradient(#27188c, #10084a); /* approx. hos_bg */

        user-select: none;
    }
</style>
