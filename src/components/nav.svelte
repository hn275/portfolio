<script lang="ts">
    import { clsx } from "clsx";
    import { onMount } from "svelte";

    const navSections = [
        {
            title: "About",
            id: "/about",
        },
        {
            title: "Experience",
            id: "/experience",
        },
        {
            title: "Projects",
            id: "/projects",
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

<nav class="bg-slate-800">
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
                    <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        {#each navSections as { id, title }}
                            <a
                                href={id}
                                class={clsx(
                                    "rounded-md px-3 py-2 text-sm font-medium",
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
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <button
                    class="relative ml-3 text-sm rounded-md bg-accent-200 px-3 py-2 hover:bg-sky-700 font-bold"
                    >Resume</button
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
