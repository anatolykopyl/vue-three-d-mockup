# Theming

<script setup>
import { ref } from 'vue';
import Mockup from '../../src/Mockup.vue'
import screenImage from '../assets/screen.png';

const darkTheme = ref(true);
</script>

<Mockup
  style="width: 100%; height: 400px;"
  :screen="screenImage"
  :phoneClr="darkTheme ? '#fff' : '#222'"
  :key="darkTheme"
/>

<div>
  <button
    class="button"
    @click="darkTheme = !darkTheme"
  >
    Toggle theme
  </button>
  Theme: {{ darkTheme ? 'dark' : 'light' }}
</div>

<style scoped>
.button {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--vp-c-brand);
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-white);
  text-decoration: none;
  font-size: 16px;
  margin: 0 8px;
}
</style>

The `phoneClr` and `lightClr` props are not reactive, and are intended to be set when the component is mounted.
But if you want to you still can force a rerender by giving the `Mockup` a key.

## Code example

```vue
<template>
  <Mockup 
    screen="screen.png" 
    :phoneClr="darkTheme ? '#fff' : '#222'"
    :key="darkTheme"
  />
</template>

<script setup>
import { ref } from 'vue';
import Mockup from 'vue-three-d-mockup';

const darkTheme = ref(true);
</script>
```
