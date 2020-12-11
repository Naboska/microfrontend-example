<template>
  <div ref="mapRef" class="mfe-map">
    <slot v-if="isMapInitialize" />
  </div>
</template>

<script lang="ts">
  import { ref, provide } from 'vue';

  import './leaflet.css';
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

<style scoped>
  .mfe-map {
    width: 100%;
    height: 100%;
    background-color: var(--black);
  }
</style>
