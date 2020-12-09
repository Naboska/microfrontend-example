<template>
  <main-layout />
  <span>{{ path }}</span>
</template>

<script lang="ts">
import {MainLayout} from 'pages';

export default {
  props: ['path'],
  components: {
    MainLayout
  }
};
</script>

