<script lang="ts">
    import { Main } from 'pages';

    export let history;
</script>

{#if history.length > 1}
    <button on:click={() => history.back()}>go back</button>
{/if}

<Main navigate={history.push}/>