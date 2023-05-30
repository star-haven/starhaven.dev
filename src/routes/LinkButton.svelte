<script lang="ts">
    export let href: string;
    export let discordCta: boolean = false;
</script>

<a
    href={href}
    class="button align-center inline-flex select-none items-center rounded-md bg-gray-700 px-5 py-1 text-lg text-white shadow-lg hover:bg-gray-600"
    class:cta={discordCta}
    class:text-2xl={discordCta}
>
    <slot />
</a>

<style>
    .button {
        --button-hover-scale: 1; /* multiplier */

        position: relative;

        text-shadow: 0 1px 2px #00000044, 0 2px 4px #ffffff22,
            0 4px 8px #00000011;

        border: 1.5px solid #ffffff22;

        transition: background 150ms cubic-bezier(0.165, 0.84, 0.44, 1),
            transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1),
            border-color 150ms cubic-bezier(0.165, 0.84, 0.44, 1);

        @supports (backdrop-filter: blur(1rem)) {
            background: #00000022;
            backdrop-filter: blur(4rem);
        }
    }

    .button:hover,
    .button:focus {
        animation: pulse 1.2s 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            infinite;

        transform: scale(calc(1.02 * var(--button-hover-scale)));

        border-color: #ffffffaa;
        outline: none;

        @supports (backdrop-filter: blur(1rem)) {
            background: #69696911;
        }
    }

    @keyframes pulse {
        0% {
            border-color: #ffffffaa;
        }
        50% {
            border-color: #ffffff22;
        }
        100% {
            border-color: #ffffffaa;
        }
    }

    .button:active {
        transform: scale(calc(1.01 * var(--button-hover-scale)))
            translateY(calc(0.5px * var(--button-hover-scale)));
    }

    .cta {
        padding: 0.75rem 1.5rem;
        border-width: 2px;
        background-color: #5865f2;

        --button-hover-scale: 1.03;

        &:hover,
        &:focus {
            background-color: #6873f3;
        }
    }
</style>
