<script lang="ts">
	import { actions } from "astro:actions";
	import { type ITask } from "../types/task";

	let { task }: { task: ITask } = $props();

	let isEdit = $state(false);

	let title = $state(task.title);
	let priority = $state(task.priority);
	let description = $state(task.description);

	let errorText = $state(""); // TODO: It's actual when only this component render.

	const updateTask = async (updates: Partial<ITask>) => {
		const id = task.id;
		const { data, error } = await actions.updateTask({ id, ...updates });
		if (!data) {
			errorText = error;
		} else {
			window.location.reload();
		}
	};

	const editTask = () => {
		isEdit = !isEdit;
	};

	const deleteTask = async (id: number) => {
		const { data, error } = await actions.deleteTask({ id });
		if (!data) {
			errorText = error;
		} else {
			window.location.reload();
		}
	};

	async function handleSubmit() {
		// e: SubmitEvent
		// e.preventDefault(); // Prevent the default form submission DON'T WORK
		await updateTask({ title, priority, description });
	}
</script>

<li class="p-4 mb-2 bg-white shadow rounded flex items-center justify-between">
	{#if isEdit}
		<form onsubmit={handleSubmit}>
			<div class="mb-4">
				<label for="title" class="block text-sm font-medium text-gray-700"
					>Title</label
				>
				<input
					type="text"
					id="title"
					bind:value={title}
					class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
					required
				/>
			</div>

			<div class="mb-4">
				<label for="priority" class="block text-sm font-medium text-gray-700"
					>Priority</label
				>
				<select
					id="priority"
					bind:value={priority}
					class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
				>
					<option value="low">low</option>
					<option value="medium">medium</option>
					<option value="high">high</option>
				</select>
			</div>

			<div class="mb-4">
				<label for="description" class="block text-sm font-medium text-gray-700"
					>Description</label
				>
				<textarea
					id="description"
					bind:value={description}
					class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
					rows="3"
				></textarea>
			</div>

			<button class="bg-green-500 text-white px-3 py-1 rounded">Save</button>
		</form>
	{:else}
		<div>
			<h2 class="text-lg font-bold">{task.title}</h2>
			<p>Priority: {task.priority}</p>
			<p>Due: {task.dueDate}</p>
			<p>{task.description}</p>
			<p>
				Status:
				{#if task.isCompleted}
					<span
						class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
						>Completed</span
					>
				{:else}
					<span
						class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
						>Pending</span
					>
				{/if}
			</p>
		</div>
	{/if}

	<div class="flex flex-wrap">
		<button
			class="bg-green-500 text-white px-2 py-1 m-0.5 rounded"
			onclick={() => updateTask({ isCompleted: !task.isCompleted })}
		>
			{task.isCompleted ? "Undo" : "Complete"}
		</button>
		<button
			class="bg-red-500 text-white px-2 py-1 m-0.5 rounded"
			onclick={() => deleteTask(task.id)}>Delete</button
		>
		<button class="bg-blue-500 text-white px-2 py-1 m-0.5 rounded" onclick={editTask}
			>{isEdit ? "Undo edit" : "Edit"}</button
		>
	</div>

	{#if !!errorText}
		<div
			class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
			role="alert"
		>
			{errorText}
		</div>
	{/if}
</li>
