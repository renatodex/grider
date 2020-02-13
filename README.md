![](https://user-images.githubusercontent.com/68507/74302582-c6139900-4d35-11ea-916e-1f5c3d960b46.gif)

![](https://img.shields.io/npm/v/@renatodex/grider)
![](https://img.shields.io/github/issues/renatodex/grider)
![](https://img.shields.io/github/forks/renatodex/grider)
![](https://img.shields.io/github/stars/renatodex/grider)

# What is Grider?
Grider is a Block Editor based on Phaser.JS that allow you to easily draw over a pre-stabilished square grid.

# Instalation
As easy as:

Using NPM:
```
npm install @renatodex/grider --save-dev
```

Using Yarn:
```
yarn add @renatodex/grider --save
```

# Usage
You can find examples of usage in the `example/` folder, but I will give you a basic example:

```html
<!DOCTYPE html>
<html>
<head>
  <script src="../dist/grider-var.js"></script>
</head>
<body>
  <div class="app"></div>

  <script>
  const grider = new Grider.Main()
  const { Game, Emitter } = grider.AppInitializer({
    canvasElement: '.app',
    canvasWidth: 400,
    canvasHeight: 300,
    gridSize: 20,
  })
  </script>

</body>
</html>
```

This will render a very simple Canvas element inside the `div.app` element:

![](https://user-images.githubusercontent.com/68507/74303562-150efd80-4d39-11ea-8d78-29417809217f.png)


# Documentation

## 1. Drawer Class

At Grider, you can use the usefull Drawer class to draw Blocks on the Grid. I will list the available methods here:

### 1.1. drawAt(options = {})

This method allow you to specifiy several options to draw a grid on the screen, you can pass the position `[x, y]`, as well several other options to customize the appearance of your block.

Each block drawn on the screen with the drawAt method returns a normal `Phaser Rectangle`, but with some extra capabilities.
This is how you draw a block:

```javascript
let drawer = grider.Drawer()
let myBlock = drawer.drawAt({
  position: [1, 2],
  bgColor: '0xff0000',
  strokeColor: '0xff0000',
})
```

## 2. Grider Rectangle

As i said, each block on the screen is a normal `Phaser.Rectangle`, but with extra methods.
Here, i list the extra methods:

### 2.1. setPositionAtGrid (x, y)

```javascript
myBlock.setPositionAtGrid(0,0)
```

This will use your current Grid setup to properly position your block on the correct grid square.
You don't need to pass the grid size or anything, everything is already stored in your Grider instance.

You can customize a few options:

- bgColor
- strokeColor
- strokeSize
- strokeAlpha
- defaultDepth

Currently, it's not possible to load Sprite Images at the Grid, but I will work on that when i have time.

## 3. Emitter (Events)

The Emitter class allows you to listen to a few actions happening on Grider.

```javascript
const { Game, Emitter } = grider.AppInitializer({
  canvasElement: '.app',
  canvasWidth: 400,
  canvasHeight: 300,
  gridSize: 20,
})
```

You can obtain the Emitter class as a response from the `AppInitializer` call.
Once you have the `Emitter` class, you can start listening to the events:

### 3.1. scene/ready

Triggered when the scene loads.
If you want to Paint blocks programatically at the Grid, every code should be inside the scene/ready method. It's the only way to guarantee that you have all the things in place.

```javascript
Emitter.on('scene/ready', () => {
  console.log('Scene is ready')
})
```

### 3.2. paint/block

Triggered when a block is painted. It's simple like that.
If the user try to paint a block in a position of the grid that already has a block, the event will not trigger.

```javascript
Emitter.on('paint/block', () => {
  console.log('Block was painted')
})
```

### 3.3. erase/block

Triggered when a block is erased. It's simple like that.
If the user try to erase a block in a position of the grid that don't have a block painted, the event will not trigger.

```javascript
Emitter.on('erase/block', () => {
  console.log('Block was erased')
})
```

# Commands & Tools

Currently, the Grider Editor only allow you to do the following commands:

- `Draw a Black Block` -> Shortcut `P`
- `Erase a Block` -> Shortcut `E`
- `Change Color` -> Shortcut `C`
- `Reset Color` -> Shortcut `X`

Yes, it's still very simple, but I will update it and add some new fancy tools!

# Contribute

E-mail me at renatodex@gmail.com with a suggestion, or yet better, clone it and open your Pull Request!

# Test & Build

1. Clone the repository locally
2. Run `npx webpack` to compile the Development version, for tests and stuff.
3. Run `yarn run build` to compile webpack for Production.
