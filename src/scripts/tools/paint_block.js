export default function ({
  x,
  y,
  size,
  gameScene,
}) {
  const bgColor = 0x000000
  const strokeColor = 0x000000
  const strokeSize = 2
  const strokeAlpha = 1
  const defaultDepth = 2
  var gridReferenceKey = `block_${x},${y}`

  if (!gameScene.children.getByName(gridReferenceKey)) {
    let cellSquare = gameScene.add.rectangle(x, y, size, size, bgColor)
    cellSquare.setOrigin(0);
    cellSquare.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
    cellSquare.setDepth(defaultDepth)
    cellSquare.setInteractive();
    cellSquare.name = `block_${x},${y}`

    return cellSquare
  }
}
