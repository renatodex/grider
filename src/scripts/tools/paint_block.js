import { buildGridKey } from '@scripts/util/helpers'

export default function ({
  x,
  y,
  size,
  scene,
}) {
  const bgColor = 0x000000
  const strokeColor = 0x000000
  const strokeSize = 2
  const strokeAlpha = 1
  const defaultDepth = 2

  if (!scene.children.getByName(buildGridKey(x, y))) {
    let cellSquare = scene.add.rectangle(x, y, size, size, bgColor)
    cellSquare.setOrigin(0);
    cellSquare.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
    cellSquare.setDepth(defaultDepth)
    cellSquare.setInteractive();
    cellSquare.name = buildGridKey(x, y)

    return cellSquare
  }
}
