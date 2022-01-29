# vue-three-d-mockup

Check out the [demo](https://anatolykopyl.github.io/vue-three-d-mockup/)

## Installation

```
$ npm install github:anatolykopyl/vue-three-d-mockup
```

## Usage

```html
<Mockup 
  screenImg="screen.png"
  lightClr="hsl(0, 100%, 100%)"
/>
```

#### Use as an async component (the 3d model is quite large so this provides a significant performance boost):
```js
<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Mockup: defineAsyncComponent(() => import('vue-three-d-mockup')),
  }
}
</script>
```

#### Or normally:
```js
<script>
import Mockup from 'vue-three-d-mockup';

export default {
  components: {
    Mockup
  }
}
</script>
```

### props:
- `screenImg`: path to image that will be displayed on the phones screen
- `lightClr`: color of the light in the environment
- `phoneClr`: color of the phone
