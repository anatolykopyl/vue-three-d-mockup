# Introduction

## Installation

```bash
npm install vue-three-d-mockup
```

## Simple usage example

<script setup>
import Mockup from '../../src/Mockup.vue'
import screenImage from '../assets/screen.png';
</script>

<Mockup
  style="width: 100%; height: 400px;"
  :screen="screenImage"
/>

`screen.png` is a static asset in the public folder.

```vue
<template>
  <Mockup screen="screen.png" />
</template>

<script setup>
import Mockup from 'vue-three-d-mockup';
</script>
```
