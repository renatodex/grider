export default function ({
  x,
  y,
  size,
  scene,
}) {
  const strokeColor = scene.game.appConfig.selectedColor
  const strokeSize = 2
  const strokeAlpha = 1
  const defaultDepth = 2

  let selectionRect = scene.add.rectangle(x, y, size, size).setOrigin(0);
  selectionRect.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
  selectionRect.setDepth(defaultDepth)
  selectionRect.name = 'selectionRect'

  return selectionRect
}
