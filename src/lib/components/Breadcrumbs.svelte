<script>

    import { page } from "$app/stores";

    import logotype from "$lib/assets/logotype.png?run&lqip=0";
    import Img from "@zerodevx/svelte-img";

    function getPageName() {
        var pageName = $page.url.pathname.slice($page.url.pathname.lastIndexOf('/'));
        pageName = pageName.slice(1);
        pageName = pageName.charAt(0).toUpperCase() + pageName.substring(1).toLowerCase()
        return pageName;
    }

</script>
<nav
    aria-label="Breadcrumb"
    class="px-1 leading-tight"
    style:--tag="breadcrumbs"
>
    <ol>
        <a href="/">
            <Img src={logotype} alt="Star Haven" class="w-40 inline-block" />
        </a>
        <li class="inline-block p-2">
            <a href="/">Star Haven</a>
        </li>
        <!-- TODO: calculate this dynamically -->
        <li class="inline-block p-2">
            <a href="#top" aria-current="page" class="font-semibold text-black"
                >{getPageName()}</a
            >
        </li>
    </ol>
</nav>

<style>
    a:hover {
        text-decoration: underline;
    }

    /* Slash between crumbs */
    li + li::before {
        display: inline-block;
        margin: 0 0.5em 0 -0.5em;
        transform: rotate(15deg) translateY(0.1em);
        border-right: 0.1em solid currentcolor;
        opacity: 0.5;
        height: 0.8em;
        content: "";
    }
</style>
