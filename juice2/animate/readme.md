# Animate.js

Animate.js is a newer addition to the Juice2 library. We wanted to make Juice stand behind its claim to be
the most expressive styling library and adding WebGL support makes progress towards that goal.

---

```html
<html>
  <body>
    <canvas height="400" width="600" id="app-canvas">
    </canvas>
  </body>
</html>
```

---

## Script.js

This is the script that enables WebGL and paints the screen black.

```javascript
const canvas = document.getElementById('app-canvas');
const gl = canvas.getContext("webgl");

function screenBlack(){
  if(!gl){
    console.log("WebGL not supported")
  }
  else {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Set clear color (black)
    gl.clear(gl.COLOR_BUFFER_BIT); // Clear the screen
  }
}

screenBlack();
```

## Creating A Triangle

This code takes a 2D position and converts it to WebGL's coordinate system.

```glsl
attribute vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}

```
