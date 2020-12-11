import { ref } from 'vue';

import {ETilesKey, MAP_TILES_URL} from "../types";

const SUBDOMAINS = ['mt0', 'mt1', 'mt2', 'mt3'];
const COPYRIGHT = '<a href="http://google.com">google</a>';
const TILE_URL = 'http://{s}.google.com/vt/lyrs';

export const useMapRouteTiles = () => {
  const activeRoute = ref<ETilesKey>(ETilesKey.Streets);

  const tiles = Object.entries(MAP_TILES_URL);

  const routes = tiles.map(([name, url]) => ({
    name,
    url: `${TILE_URL}=${url}={x}&y={y}&z={z}`,
    attribution: COPYRIGHT,
    subdomains: SUBDOMAINS,
  }));

  const setActiveRoute = (route: ETilesKey) => activeRoute.value = route;

  return {
    routes,
    activeRoute,
    setActiveRoute
  }
};
