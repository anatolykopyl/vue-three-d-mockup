<template>
  <div>
    <Mockup
      class="mockup"
      screenImg="screen.png"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Mockup: defineAsyncComponent(() => import('./Mockup.vue')),
  },
};
</script>

<style>
html, body {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mockup {
  width: 500px;
  height: 500px;
  margin: auto;
}
</style>
