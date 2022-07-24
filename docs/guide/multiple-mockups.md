# Multiple mockups

<script setup>
import Mockup from '../../src/Mockup.vue'
import screenImage from '../assets/screen.png';
</script>

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

## Code example

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