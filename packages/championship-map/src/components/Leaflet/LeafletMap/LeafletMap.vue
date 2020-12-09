<template>
  <div ref="mapRef" class="mfe-map">
    <slot v-if="isMapInitialize" />
  </div>
</template>

<script lang="ts">
  import { ref, provide } from 'vue';

  import { useMapInitialize } from './hooks';

  export default {
    name: 'LeafletMap',
    setup() {
      const mapRef = ref<HTMLDivElement>(null);
      const { map, isMapInitialize } = useMapInitialize(mapRef, {});

      provide('map', map);

      return {
        mapRef,
        isMapInitialize
      }
    }
  }
</script>
