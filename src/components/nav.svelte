<script lang="ts">
    import { clsx } from "clsx";
    import { onMount } from "svelte";
    import { email } from "../assets/links";

    const navSections = [
        {
            title: "About",
            id: "#about",
        },
        {
            title: "Experience",
            id: "#experience",
        },
        {
            title: "Projects",
            id: "#projects",
        },
        {
            title: "Contact",
            id: "#contact",
        },
    ];

    let open: boolean = false;
    function toggleMenu() {
        open = !open;
    }

    let pathName: string;
    onMount(() => {
        pathName = window.location.pathname;
    });
</script>

<nav class="sticky top-0 bg-slate-950 z-[888]">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                <!-- Mobile menu button-->
                <button
                    type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    on:click={toggleMenu}
                >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" -->
                    <svg
                        class={clsx(open ? "hidden" : "block", "h-6 w-6")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        ></path>
                    </svg>
                    <!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden" -->
                    <svg
                        class={clsx(open ? "block" : "hidden", "h-6 w-6")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
                <div class="flex flex-shrink-0 items-center">
                    <a href="/" class="font-bold text-accent-200 text-lg">
                        {"{HalN}"}
                    </a>
                </div>
                <div class="hidden md:block sm:ml-6">
                    <div class="flex">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        {#each navSections as { id, title }}
                            <a
                                href={id}
                                class={clsx(
                                    "navlink",
                                    "px-3 py-2 text-sm transition-all",
                                    pathName === id
                                        ? "bg-accent-100 text-slate-950 font-bold cursor-default"
                                        : "text-slate-500 hover:bg-slate-900 hover:text-white",
                                )}
                            >
                                {title}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <a class="btn btn-secondary" href="#contact" 
                    >Contact</a
                >
            </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
        class={clsx(
            open ? "h-[190px]" : "h-0",
            "md:hidden transition-all overflow-clip flex flex-col gap-2 justify-between",
        )}
        id="mobile-menu"
    >
        <div class="space-y-1 px-2 pb-3 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            {#each navSections as { id, title }}
                <a
                    href={id}
                    class={clsx(
                        "px-3 py-2 font-medium rounded-md transition-all block",
                        pathName === id
                            ? "bg-slate-900 text-white"
                            : "bg-slate-800 text-slate-50 hover:text-white hover:bg-slate-700",
                    )}
                >
                    {title}
                </a>
            {/each}
        </div>
    </div>
</nav>

<style>
    .navlink:first-child {
        @apply rounded-bl-lg rounded-tl-lg;
        @apply border-r border-l border-slate-900;
    }
    .navlink {
        @apply border-t border-b border-slate-900;
    }
    .navlink:last-child {
        @apply rounded-br-lg rounded-tr-lg;
        @apply border-r border-l border-slate-900;
    }
</style>
