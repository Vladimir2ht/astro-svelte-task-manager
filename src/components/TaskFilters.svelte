<script lang="ts">
	import { onMount } from "svelte";
	import { ETaskPriority } from "../types/task";

	let priority: string | null = $state("");
	let completedOnly = $state(false);

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		
		priority = params.get("priority") || "";
		completedOnly = params.get("isCompleted") === "true";
		console.log(priority, completedOnly);
	});

	const applyFilters = async (clear = false) => {
		const params = new URLSearchParams(window.location.search);
		const filters: {
			priority?: string;
			isCompleted?: string;
		} = {};
		console.log("applyFilters", clear);

		if (clear) {
			const keys = Array.from(params.keys());

			keys.forEach((key) => {
				params.delete(key);
			});
		} else {
			if (priority) {
				params.set("priority", priority);
				filters.priority = priority;
			}
			if (completedOnly) {
				const isCompletedString = String(completedOnly);
				params.set("isCompleted", isCompletedString);
				filters.isCompleted = isCompletedString;
			} else params.delete("isCompleted");
		}

		const newUrl = `${window.location.pathname}?${params.toString()}`;
		window.history.replaceState(null, "", newUrl);
		console.log(newUrl);

		window.location.replace(newUrl);
	};
</script>

<div class="mb-4 px-3">
	<label for="priority" class="mr-2">Filter by priority:</label>
	<select id="priority" bind:value={priority} class="border rounded p-2">
		<option value="">All</option>
		{#each Object.values(ETaskPriority) as priority}
			<option value={priority}>{priority}</option>
		{/each}
	</select>

	<label class="ml-4">
		<input type="checkbox" bind:checked={completedOnly} class="mr-1" />
		Completed only
	</label>

	<div class="flex justify-between">
		<button
			class="bg-blue-500 text-white px-4 py-2 rounded"
			onclick={() => applyFilters()}
		>
			Apply
		</button>
		<button
			class="bg-gray-500 text-white px-4 py-2 rounded outline"
			onclick={() => applyFilters(true)}
		>
			Clear
		</button>
	</div>
</div>
