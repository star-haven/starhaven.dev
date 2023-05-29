<script lang="ts">
    export let href: string;
    export let cta: boolean = false;
</script>

<a
    {href}
    class="button text-lg text-white bg-gray-800 px-5 py-1 shadow-lg rounded-md select-none inline-flex align-center items-center"
    class:cta={cta}
    class:text-2xl={cta}
>
    <slot />
</a>

<style>
    .button {
        position: relative;
        
        text-shadow: 0 1px 2px #00000044, 0 2px 4px #ffffff22, 0 4px 8px #00000011;

        border: 1.5px solid #ffffff22;

        transition:
            background 150ms cubic-bezier(0.165, 0.84, 0.44, 1),
            transform 80ms cubic-bezier(0.165, 0.84, 0.44, 1),
            border-color 90ms cubic-bezier(0.165, 0.84, 0.44, 1);

        @supports (backdrop-filter: blur(1rem)) {
            background: #00000022;
            backdrop-filter: blur(4rem);
        }
    }

    .button:hover, .button:focus {
        animation: pulse 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;

        transform: scale(1.02);

        border-color: #ffffffaa;
        outline: none;

        background: #000000bb;
        @supports (backdrop-filter: blur(1rem)) { background: #69696911; }
    }

    @keyframes pulse {
        0% {
            border-color: #ffffff22;
        }
        50% {
            border-color: #ffffffaa;
        }
        100% {
            border-color: #ffffff22;
        }
    }

    .button:active {
        transform: scale(1.01) translateY(0.5px);
    }

    .cta {
        padding: 0.75rem 1.5rem;
        border-width: 2px;
    }
</style>
