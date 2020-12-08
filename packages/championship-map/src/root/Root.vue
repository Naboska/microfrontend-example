<template>
    <span>{{ path }}</span>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  props: ['path'],

  setup(props) {
    onMounted(() => {
      console.log(props)
    })
  }
};
</script>

