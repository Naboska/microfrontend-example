import Vue, { ref, onMounted } from 'vue';
import L, { Map } from 'leaflet';

import { TMapOptions } from '../types';

export const useMapInitialize = (mapRef: Vue.Ref<HTMLElement>, { center, zoom }: TMapOptions) => {
  const map = ref<Map>(null);
  const isMapInitialize = ref(false);

  onMounted(() => {
    map.value = L.map(mapRef.value).setView(center, zoom);
    isMapInitialize.value = true;
  });

  return {
    map,
    isMapInitialize,
  };
};
