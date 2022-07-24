# Screen image from `assets` folder

## In Vite powered projects

```vue
<template>
  <Mockup :screen="screenImage" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
import screenImage from './assets/screen.png';
</script>
```

## In Vue CLI powered projects

```vue
<template>
  <Mockup :screen="require('./assets/screen.png')" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
</script>
```