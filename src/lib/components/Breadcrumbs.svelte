<nav
    aria-label="Breadcrumb"
    class="px-1 leading-tight"
    style:--tag="breadcrumbs"
>
    <ol>
        <li class="inline-block p-2">
            <a href="/">Star Haven</a>
        </li>
        <!-- TODO: calculate this dynamically -->
        <li class="inline-block p-2">
            <a href="#top" aria-current="page" class="font-semibold text-black"
                >Games</a
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
