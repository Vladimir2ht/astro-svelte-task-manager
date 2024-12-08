<script lang="ts">
  import TaskFilters from "./TaskFilters.svelte";
  import TaskItem from "./TaskItem.svelte";
  import Error from "./ErrorTextBlock.svelte";
  import { type ITask } from "../types/task";
  import { actions } from "astro:actions";
  import { onMount } from "svelte";

  let tasks: ITask[] = [];
  let errorText = "";

  const fetchTasks = async () => {
    const params = new URLSearchParams(window.location.search);
    const filters = {
      priority: params.get("priority") || "",
      isCompleted: params.get("isCompleted") === "true" || "",
    };

    const { data, error } = await actions.fetchTasks({
      filters,
    });
    if (data) {
      tasks = data.tasks ?? [];
      errorText = data.error ?? "";
    } else if (error) {
      console.error(error);
    }
  };

  onMount(async () => await fetchTasks());
</script>

<ul>
  <TaskFilters {fetchTasks} />
  {#each tasks as task}
    <TaskItem {task} />
  {/each}

  {#if !!errorText}
    <Error {errorText} />
  {/if}
</ul>
