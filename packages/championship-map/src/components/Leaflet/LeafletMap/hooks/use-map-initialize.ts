import Vue, { ref, onMounted } from 'vue';
import L, { Map } from 'leaflet';

export const useMapInitialize = (mapRef: Vue.Ref<HTMLElement>, options: any) => {
  const map = ref<Map>(null);
  const isMapInitialize = ref(false);

  onMounted(() => {
    map.value = L.map(mapRef.value);
    isMapInitialize.value = true;
  })

  return {
    map,
    isMapInitialize
  }
}
