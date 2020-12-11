<script lang="ts">
  import { onMount } from "svelte";
  import { getPost } from "./api";
  import { TPost } from "./types";

  export let navigate;

  let data: TPost[] = [];

  onMount(async () => {
    data = await getPost();
  })
</script>

<style>
    .posts {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
    }

    .post {
        display: flex;
        flex-direction: column;
        max-width: 30%;
        padding: 10px;
        margin: 10px;
        border: 1px solid;
        border-radius: 4px;
    }
</style>

<div class="posts">
    {#each data as post}
        <section class="post" on:click={() => navigate(`/post/${post.id}`)}>
            <h2>{@html post.title.rendered}</h2>
            {@html post.excerpt.rendered}
        </section>
    {/each}
</div>