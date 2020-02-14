import { AvailableColors, OtherColors } from '@scripts/util/colors'

export default function ({
  x,
  y,
  size,
  scene,
}) {
  const bgColor = scene.appConfig.bgColor || OtherColors.FLOOR_COLOR
  const strokeColor = scene.appConfig.strokeColor || OtherColors.FLOOR_STROKE_COLOR
  const strokeSize = scene.appConfig.strokeSize || 2
  const strokeAlpha = 1
  const defaultDepth = 0

  let cellSquare = scene.add.rectangle(x, y, size, size, bgColor)
  cellSquare.setOrigin(0);
  cellSquare.setStrokeStyle(strokeSize, strokeColor, strokeAlpha)
  cellSquare.setDepth(defaultDepth)

  return cellSquare
}
