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
  const grider = Grider.Main()
  grider.AppInitializer({
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

# Commands & Tools

Currently, the Grider Editor only allow you to do the following commands:

- `Draw a Black Block` -> Shortcut `P`
- `Erase a Block` -> Shortcut `E`

Yes, it's still very simple, but I will update it and add some new fancy tools!

# Contribute

E-mail me at renatodex@gmail.com with a suggestion, or yet better, clone it and open your Pull Request!

# Test & Build

1. Clone the repository locally
2. Run `npx webpack` to compile the Development version, for tests and stuff.
3. Run `yarn run build` to compile webpack for Production.
