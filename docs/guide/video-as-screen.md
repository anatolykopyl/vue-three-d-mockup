# Video as screen

<script setup>
import { ref } from 'vue';
import Mockup from '../../src/Mockup.vue'
import screenVideo from '../assets/screen.mp4';

const videoElement = ref(null);
const vidReady = ref(false);
</script>

<Mockup
  v-if="vidReady"
  style="width: 100%; height: 400px;"
  :screen="videoElement"
/>

<div>
  <video
    :src="screenVideo"
    ref="videoElement"
    @canplay="vidReady = true"
    muted
    autoplay
    loop
    style="
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
    "
  ></video>
</div>

The `screen` prop accepts a `video` element. 

The `screen` prop is unreactive, so when using it as a video
it's important to only render the `Mockup` element when the video
is loaded. Check out the code example to see how to do this.

::: warning
The video will not be visible on the model if it is set to `display: none` or `visibility: hidden`.
Use `opacity: 0; pointer-events: none;` on the `<video>` element for best browser compatability.
:::

::: warning
The video may not be autoplaying if the original `<video>` element is scrolled off screen.
Some browsers check for viewport intersection so it may be best to set the video position to `fixed`. 
:::


## Code example

```vue
<template>
  <Mockup 
    v-if="vidReady"
    :screen="videoElement"
  />

  <video
    :src="screenVideo"
    ref="videoElement"
    @canplay="vidReady = true"
    muted
    autoplay
    loop
    style="
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
    "
  ></video>
</template>

<script setup>
import { ref } from 'vue';
import Mockup from 'vue-three-d-mockup';
import screenVideo from './assets/screen.mp4';

const videoElement = ref(null);
const vidReady = ref(false);
</script>
```