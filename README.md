# vue-three-d-mockup

Check out the [demo](https://anatolykopyl.github.io/vue-three-d-mockup/)

## Installation

```
$ npm install vue-three-d-mockup
```

## Usage

```html
<Mockup 
  screen="screen.png"
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

| Prop       | Type               | Required | Default                        | Description                                                                                                                                                              |
|------------|--------------------|----------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `screen`   | String  \| Element | `true`   | none                           | Path an image that will be displayed on the phones screen or the  `<video>`  element displayed on the phones screen. When using the latter there are caveats, see below. |
| `lightClr` | String             | `false`  | `"white"`                      | Color of the light as a CSS-style string.                                                                                                                                |
| `phoneClr` | String             | `false`  | `"white"`                      | Color of the phone as a CSS-style string.                                                                                                                                |
| `rotation` | Object             | `false`  | `{ x: -0.2, y: 0.3, z: 0.06 }` | The orientation of the phone described in rotation values arround the 3 axes.                                                                                            |

### Caveats:

- The `screen` prop is unreactive, so when using it as a video 
it's important to only render the `Mockup` element when the video 
is loaded. Check out [Demo.vue](src/Demo.vue) to see an example of how 
to do this.
- The video on the model will not be shown if the original `<video>` 
element is hidden with `display: none`, so use `visibility: hidden` 
instead. 
- The video may not be autoplaying if the original `<video>` element
is scrolled off screen. 
