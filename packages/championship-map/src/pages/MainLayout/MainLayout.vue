<template>
  <LeafletMap :options='mapOptions'>
    <ul class='mfe-map-tiles'>
      <li
        v-for='route in routes'
        :class='{ active: activeRoute === route.name }'
        @click='setActiveRoute(route.name)'
      >
        {{ route.name }}
      </li>
    </ul>
    <LeafletTileRoute
      v-for='route in routes'
      v-bind:key='route.name'
      v-bind:route='route'
      :activeRoute='activeRoute'
    />
  </LeafletMap>
</template>

<script lang='ts'>
import { LeafletMap, LeafletTileRoute } from 'components';
import { useMapRouteTiles } from './hooks';
import { MAP_CENTER, MAP_ZOOM } from './constants';

export default {
  name: 'MainLayout',
  components: {
    LeafletMap,
    LeafletTileRoute,
  },
  setup() {
    const { routes, activeRoute, setActiveRoute } = useMapRouteTiles();

    return {
      routes,
      setActiveRoute,
      activeRoute,
      mapOptions: {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
      },
    };
  },
};
</script>

<style scoped>
.mfe-map-tiles {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  list-style: none;
}

.active {
  font-weight: 600;
}

.mfe-map-tiles > li {
  background-color: white;
  cursor: pointer;
}
</style>
