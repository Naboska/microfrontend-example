<template>
  <span>ssssSLOOOt</span>
</template>

<script lang="ts">
  import { useMap } from 'components';

  export default {
    name: 'MapLayoutSpinner',
    setup() {
      const map = useMap();

      console.log(map.getZoom)
    }
  }
</script>
