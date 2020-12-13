<template>
  <div ref="mapRef" class="mfe-map">
    <slot v-if="isMapInitialize" />
  </div>
</template>

<script lang="ts">
  import { ref, provide, PropType } from 'vue';

  import './leaflet.css';
  import { useMapInitialize } from './hooks';
  import { TMapOptions } from './types';

  export default {
    name: 'LeafletMap',
    props: {
      options: Object as PropType<TMapOptions>,
    },
    setup(props) {
      const mapRef = ref<HTMLDivElement>(null);
      const { map, isMapInitialize } = useMapInitialize(mapRef, props.options);

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
