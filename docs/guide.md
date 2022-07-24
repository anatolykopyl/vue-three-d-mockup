# Guide

## Installation

```bash
npm install vue-three-d-mockup
```

## Usage

<script setup>
import { ref } from 'vue';
import Mockup from '../src/Mockup.vue'
import screenImage from './assets/screen.png';
import screenVideo from './assets/screen.mp4';

const videoElement = ref(null);
const vidReady = ref(false);
</script>

<Mockup
  style="width: 100%; height: 400px;"
  :screen="screenImage"
/>

### Simple example

`screen.png` is a static asset in the public folder.

```vue
<template>
  <Mockup screen="screen.png" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
</script>
```

### Using assets as the screen

- #### In vite powered projects

```vue
<template>
  <Mockup :screen="screenImage" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
import screenImage from './assets/screen.png';
</script>
```

- #### In vue-cli powered projects

```vue
<template>
  <Mockup :screen="require('./assets/screen.png')" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
</script>
```

### Multiple phones

<Mockup
  style="width: 100%; height: 400px;"
  :screen="[screenImage, screenImage]"
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

```vue
<template>
  <Mockup 
    :screen="[screenImage, screenImage]"
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
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
import screenImage from './assets/screen.png';
</script>
```

### Video

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
      visibility: hidden;
    "
  ></video>
</div>

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
      visibility: hidden;
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

## Avaliable props

| Prop       | Type                       | Required | Default                        | Description                                                                                                                                                                                                                 |
| ---------- | -------------------------- | -------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screen`   | String \| Element \| Array | `true`   | none                           | Path to an image that will be displayed on the phones screen or the `<video>` element displayed on the phones screen. When using the latter there are [caveats](#caveats). Can also be an array of any of the options above. |
| `lightClr` | String                     | `false`  | `"white"`                      | Color of the light as a CSS-style string.                                                                                                                                                                                   |
| `phoneClr` | String                     | `false`  | `"white"`                      | Color of the phone as a CSS-style string.                                                                                                                                                                                   |
| `position` | Object \| Array            | `false`  | `{ x: 0, y: 0, z: 0 }`         | The position of the phone. Can also be an array if multiple screens specified.                                                                                                                                              |  |
| `rotation` | Object \| Array            | `false`  | `{ x: -0.2, y: 0.3, z: 0.06 }` | The orientation of the phone described in rotation values arround the 3 axes. Can also be an array if multiple screens specified.                                                                                           |

## Caveats

- The `screen` prop is unreactive, so when using it as a video
  it's important to only render the `Mockup` element when the video
  is loaded. Check out the examples above to see how
  to do this.
- The video on the model will not be shown if the original `<video>`
  element is hidden with `display: none`, so use `visibility: hidden`
  instead.
- The video may not be autoplaying if the original `<video>` element
  is scrolled off screen.
- Even with the mentioned above workarounds, the video may not be
  working in Safari.
