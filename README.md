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

```js
<script>
import Mockup from 'vue-tree-d-mockup'

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
