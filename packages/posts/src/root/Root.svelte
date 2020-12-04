<script lang="ts">
  import {Posts} from "pages";
  import {onDestroy, onMount} from "svelte";

  export let theme;
  export let history;

  let historyContext = [];
  let unsubscribe;

  onMount(() => {
    unsubscribe = history.subscribe(context => historyContext = context)
  });

  onDestroy(() => {
    unsubscribe();
  })
</script>

{JSON.stringify(historyContext)}

<br/>

{JSON.stringify(theme)}

<br/>

{#if history.length > 1}
    <button on:click={() => history.back()}>go back</button>
{/if}

<Posts navigate={history.push}/>