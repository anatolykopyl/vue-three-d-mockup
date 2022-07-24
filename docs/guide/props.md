# Props

## `screen`
Path to an image that will be displayed on the phones screen or the `<video>` element displayed on the phones screen. Can also be an array of any of the options above.

- Type: `String | Element | Array[String | Element]`
- Required: `true`

## `lightClr`
Color of the light as a CSS-style string.

- Type: `String`
- Required: `false`
- Default: `"white"`

## `phoneClr`
Color of the phone as a CSS-style string.

- Type: `String`
- Required: `false`
- Default: `"white"`

## `position`
The position of the phone. Can also be an array if multiple screens specified.

- Type: `Object | Array[Object]`
- Required: `false`
- Default: `{ x: 0, y: 0, z: 0 }`

## `rotation`
The orientation of the phone described in rotation values arround the 3 axes. Can also be an array if multiple screens specified.

- Type: `Object | Array[Object]`
- Required: `false`
- Default: `{ x: -0.2, y: 0.3, z: 0.06 }`
