<script lang="ts">
  import { toRef } from 'vue';

  import { useTileRoute } from './hooks';

  export default {
    name: 'LeafletTileRoute',
    props: {
      activeRoute: String,
      route: Object
    },
    setup(props) {
      const activeRoute = toRef(props, 'activeRoute');

      useTileRoute(activeRoute, props.route);
    }
  }
</script>
