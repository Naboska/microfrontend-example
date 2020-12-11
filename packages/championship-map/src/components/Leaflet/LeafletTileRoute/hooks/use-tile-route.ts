import { onUnmounted, watchEffect, ref } from 'vue';
import L, { TileLayer } from 'leaflet';

import { useMap } from 'components';

export const useTileRoute = (activeRoute, { url, name, ...options }) => {
  const map = useMap();
  const layer = ref<TileLayer>(L.tileLayer(url, options))

  const stop = watchEffect(() => {
    const isActive = activeRoute.value === name;
    if (isActive) layer.value.addTo(map);
    else layer.value.removeFrom(map);
  })

  onUnmounted(() => {
    layer.value.remove();
    stop();
  });
}
