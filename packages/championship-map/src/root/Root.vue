<template>
  <main-layout />
</template>

<script lang='ts'>
import { onBeforeMount, onUnmounted } from 'vue';
import css from 'css-vars-adapter';

import { MainLayout } from 'pages';
import { createRootStyle } from './utils';

export default {
  props: {
    path: String,
    theme: Object,
    setAppStyle: Function,
  },
  components: {
    MainLayout,
  },
  setup(props) {
    const { theme } = props;
    const navigate = document.querySelector('[id$=navigate]');

    onBeforeMount(() => {
      css.setVariables(theme.colors, { replace: false });
      props.setAppStyle(createRootStyle(navigate.clientHeight));
    });

    onUnmounted(() => {
      props.setAppStyle('');
    });
  },
};
</script>

