<template>
  <Mockup
    class="mockup"
    screenImg="screen.png"
  />
</template>

<script>
import Mockup from './Mockup.vue';

export default {
  components: {
    Mockup,
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
