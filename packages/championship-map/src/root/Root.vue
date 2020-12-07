<template>
  <div>
    <h1>Hello from Vue</h1>
    <button @click="onConsole">check</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  @Prop() history: object;

  onConsole() {
    console.log(this.history)
  }
}
</script>

