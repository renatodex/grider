import drawPaintGrid from '@scripts/tools/paint_grid'
import drawSelectionBlock from '@scripts/tools/selection_block'
import { calculateAxisPosition, buildGridKey } from '@scripts/util/helpers'
import { AvailableColors } from '@scripts/util/colors'

export function clickTool ({ pointer, paintMode, appConfig }) {
  let x = parseInt(pointer.x/appConfig.gridSize)*appConfig.gridSize
  let y = parseInt(pointer.y/appConfig.gridSize)*appConfig.gridSize

  let scene = pointer.manager.game.scene.scenes[0]
  paintMode({
    bgColor: appConfig.selectedColor,
    strokeColor: AvailableColors.WALL_COLOR,
    x,
    y,
    size: appConfig.gridSize,
    scene: scene
  })
}

// Fired when user moves pointer through the grid
export function dragTool ({ pointer, paintMode, scene, appConfig }) {
  positionSelectionBlock({ pointer, scene, appConfig })

  if (pointer.isDown) {
    clickTool({ pointer, paintMode, appConfig })
  }
};

// Set the Position of the Selection Block
export function positionSelectionBlock({ pointer, scene, appConfig }) {
  let selectionRect = scene.children.getByName('selectionRect')
  selectionRect.x = calculateAxisPosition(pointer.x, appConfig.gridSize)
  selectionRect.y = calculateAxisPosition(pointer.y, appConfig.gridSize)
}

// Create the Selection Block
export function createSelectionBlock({ appConfig, scene }) {
  return drawSelectionBlock({
    size: appConfig.gridSize,
    x: 0,
    y: 0,
    scene: scene
  })
}

// Create Grid Blocks
export function createGridBlocks ({ appConfig, scene }) {
  let gridBlocks = []
  for(let i = 0; i < appConfig.totalGridX; i++) {
    for(let j = 0; j < appConfig.totalGridY; j++) {
      gridBlocks.push(
        drawPaintGrid({
          x: i*appConfig.gridSize,
          y: j*appConfig.gridSize,
          size: appConfig.gridSize,
          scene: scene
        })
      )
    }
  }
  return gridBlocks
}
