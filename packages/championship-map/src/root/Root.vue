<template>
  <main-layout />
  <span>{{ path }}</span>
  <button @click="getVars">getVariables</button>
</template>

<script lang="ts">
import css from 'css-vars-adapter';

import {MainLayout} from 'pages';

export default {
  props: {
    path: String,
    theme: Object,
    setAppStyle: Function
  },
  components: {
    MainLayout
  },
  setup(props) {
    const { theme } = props;

    css.setVariables(theme.colors);
    props.setAppStyle((mainContainer: string) => `${mainContainer}, ${mainContainer} .single-spa-container { height: 100%; }`)
  },
  methods: {
    getVars() {
      console.log(css.getVariables())
    }
  }
};
</script>

