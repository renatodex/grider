import PaintBlock from '@scripts/tools/paint_block'
import { calculatePositionFromGrid } from '@scripts/util/helpers'

export function empowerBlock ({ block, Game }) {
  block.setPositionAtGrid = function (x, y) {
    block.x = calculatePositionFromGrid(x, Game.appConfig.gridSize)
    block.y = calculatePositionFromGrid(y, Game.appConfig.gridSize)
  }

  return block
}

export function Drawer ({ Game, Emitter }) {
  const drawAt = function ({ position, bgColor, strokeColor }) {
    return empowerBlock({
      block: PaintBlock({
        x: calculatePositionFromGrid(position[0], Game.appConfig.gridSize),
        y: calculatePositionFromGrid(position[1], Game.appConfig.gridSize),
        size: Game.appConfig.gridSize,
        scene: Game.currentScene,
        bgColor: bgColor,
        strokeColor: strokeColor,
      }),
      Game: Game
    })
  }

  return {
    drawAt
  }
}
