<script lang="ts">
  import {Posts} from "pages";

  export let history;
</script>

{#if history.length > 1}
    <button on:click={() => history.back()}>go back</button>
{/if}

<Posts navigate={history.push}/>