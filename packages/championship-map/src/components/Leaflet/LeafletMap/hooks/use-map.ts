import Vue, { inject } from 'vue';
import { Map } from 'leaflet';

export const useMap = (): Map => {
  const map = inject<Vue.Ref<Map>>('map');

  return map.value;
}
