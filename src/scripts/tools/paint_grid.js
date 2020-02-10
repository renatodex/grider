export default function ({
  x,
  y,
  size,
  scene,
}) {
  const bgColor = 0x1099bb
  const strokeColor = 0xc9d7c2
  const strokeSize = 2
  const strokeAlpha = 1
  const defaultDepth = 0

  var gridReferenceKey = `${x},${y}`
  let cellSquare = scene.add.rectangle(x, y, size, size, bgColor)
  cellSquare.setOrigin(0);
  cellSquare.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
  cellSquare.setDepth(defaultDepth)

  return cellSquare
}
