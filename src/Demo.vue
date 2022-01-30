<template>
  <div>
    <h1>
      vue-three-d-mockup
    </h1>
    <div class="showcase">
      <Mockup
        v-if="vidReady"
        class="mockup"
        :video="$refs.video"
      />
      <Mockup
        class="mockup"
        screenImg="screen.png"
        :rotation="{
          x: -0.2,
          y: -0.3,
          z: -0.06,
        }"
        phoneClr="black"
      />
    </div>

    <video
      src="screen.mp4"
      ref="video"
      @canplay="vidReady = true"
      muted
      autoplay
      loop
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      vidReady: false,
    };
  },
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
  font-family: sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

video {
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
}

.showcase {
  display: flex;
  justify-content: space-evenly;
}

.mockup {
  width: 500px;
  height: 500px;
  margin: auto;
}
</style>
