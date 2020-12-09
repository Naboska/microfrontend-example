<template>
  <LeafletMap>
    <MainLayoutSpinner />
  </LeafletMap>
</template>

<script lang="ts">
  import { LeafletMap } from 'components';
  import { MainLayoutSpinner } from './units';

  export default {
    name: 'MainLayout',
    components: {
      LeafletMap,
      MainLayoutSpinner
    }
  }
</script>
