<script lang="ts">
    let email: string;
    let message: string;
    let name: string;

    let loading = false;
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

        name= "";
        message = "";
        email = "";
        } catch (e) {
            console.error(e);
        } finally {
            loading = false;
        }
    }
</script>

<div class="w-full">
    <form
        action=""
        class="flex flex-col items-center gap-3 max-w-md mx-auto"
        on:submit|preventDefault={handleSubmit}
    >
        <input placeholder="Name" type="text" required bind:value={name} />
        <input placeholder="Email" type="email" required bind:value={email} />
        <textarea placeholder="Message" required bind:value={message} />

        <button
            type="submit"
            class="bg-accent-200 text-slate-950 w-max px-3 py-2 rounded-md font-bold hover:bg-accent-100 transition-all"
            >Send</button
        >
    </form>
</div>

<style lang="postcss">
    input,
    textarea {
        @apply bg-slate-950 border border-slate-900;
        @apply min-h-[3em] rounded-md p-3 w-full;
        @apply placeholder:text-slate-700 placeholder:text-sm;
    }

    textarea {
        @apply min-h-[5em];
    }
</style>