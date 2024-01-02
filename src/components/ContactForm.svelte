<script lang="ts">
    import { afterUpdate } from "svelte";

    let email: string;
    let message: string;
    let name: string;
    let loading = false;
    let ok = false;
    let error: string | undefined;

    async function handleSubmit() {
        try {
            loading = true;
            const r = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!r.ok) {
                const msg = await r.text();
                throw new Error(msg);
            }

            name = "";
            message = "";
            email = "";
            ok = true;
        } catch (e) {
            error = "Something went wrong, try again later.";
            console.error(e);
        } finally {
            loading = false;
        }
    }

    afterUpdate(() => {
        if (ok!) return;
        const id = setTimeout(() => (ok = false), 5000);
        return () => clearTimeout(id);
    });

    afterUpdate(() => {
        if (!error) return;
        const id = setTimeout(() => (error = undefined), 5000);
        return () => clearTimeout(id);
    });
</script>

<div class="w-full">
    <form
        action=""
        class="flex flex-col items-center gap-3 max-w-md mx-auto"
        on:submit|preventDefault={handleSubmit}
    >
        <input
            placeholder="Name"
            type="text"
            required
            bind:value={name}
            disabled={loading}
        />
        <input
            placeholder="Email"
            type="email"
            required
            bind:value={email}
            disabled={loading}
        />
        <textarea
            placeholder="Message"
            required
            bind:value={message}
            disabled={loading}
        />

        <button
            type="submit"
            class="bg-accent-200 text-slate-950 px-3 py-2 rounded-md font-semibold hover:bg-accent-100 transition-all disabled:hover:brightness-100 disabled:bg-slate-900 disabled:text-late-950 w-24"
            disabled={loading}
        >
            {#if loading}
                Sending...
            {:else}
                Send
            {/if}
        </button>
    </form>
</div>

<div class="toast" data-banner={ok}>
    <span class="bg-green-400">Message sent! Talk to you soon.</span>
</div>

<div class="toast" data-banner={error !== undefined}>
    <span class="bg-red-400">{error}</span>
</div>

<style lang="postcss">
    .toast[data-banner="true"] {
        @apply translate-y-0;
    }

    .toast > span {
        @apply p-3 rounded-md text-slate-950 w-max font-semibold;
    }

    .toast {
        @apply fixed bottom-0 left-0 right-0 p-6 translate-y-full transition-all;
    }

    input,
    textarea {
        @apply bg-slate-900 border border-slate-900;
        @apply min-h-[3em] rounded-md p-3 w-full;
        @apply transition-all;
    }

    input::placeholder,
    textarea::placeholder {
        @apply text-slate-700 text-sm;
    }

    input:disabled,
    textarea:disabled {
        @apply bg-slate-950 text-slate-700;
    }

    textarea {
        @apply min-h-[5em];
    }
</style>
