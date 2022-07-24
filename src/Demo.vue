<template>
  <div>
    <h1>
      vue-three-d-mockup
    </h1>

    <Mockup
      v-if="vidReady"
      class="mockup"
      :screen="[$refs.video, screenImage]"
      :position="[
        {
          x: -50
        },
        {
          x: 50
        },
      ]"
      :rotation="[{}, {
        y: -0.3,
        z: -0.06,
      }]"
    />
    <!-- <Mockup
      class="mockup"
      :screen="require('./assets/screen.png')"
    /> -->

    <video
      :src="screenVideo"
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
import screenImage from './assets/screen.png';
import screenVideo from './assets/screen.mp4';

export default {
  data() {
    return {
      vidReady: false,
    };
  },
  components: {
    Mockup: defineAsyncComponent(() => import('./Mockup.vue')),
  },
  setup() {
    return {
      screenImage,
      screenVideo,
    };
  }
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

.mockup {
  width: 800px;
  height: 500px;
}
</style>
