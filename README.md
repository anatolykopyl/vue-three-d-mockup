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
- `video`: the video element displayed on the phones screen. When using this option there are caveats, watch below
- `lightClr`: color of the light
- `phoneClr`: color of the phone
- `rotation`: object with x, y and z rotation values

### Caveats:

- The `video` prop is unreactive, so when using it it's important to 
only render the `Mockup` element when the video is loaded. Check out 
[Demo.vue](src/Demo.vue) to see an example of how to do this.
- The video on the model will not be shown if the original `<video>` 
element is hidden with `display: none`, so use `visibility: hidden` 
instead. 
- The video may not be autoplaying if the original `<video>` element
is scrolled off screen. 
