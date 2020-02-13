import { buildGridKey } from '@scripts/util/helpers'

export default function (options) {
  let scene = options.scene
  let x = options.x
  let y = options.y
  let size = options.size
  let bgColor = options.bgColor || 0x000000
  let strokeColor = options.strokeColor || 0x000000
  let strokeSize = options.strokeSize || 2
  let strokeAlpha = options.strokeAlpha || 1
  let defaultDepth = options.defaultDepth || 2

  if (!scene.children.getByName(buildGridKey(x, y))) {
    let cellSquare = scene.add.rectangle(x, y, size, size, bgColor)
    cellSquare.setOrigin(0);
    cellSquare.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
    cellSquare.setDepth(defaultDepth)
    cellSquare.setInteractive();
    cellSquare.name = buildGridKey(x, y)

    scene.game.emitter.emit('paint/block')

    return cellSquare
  }
}
