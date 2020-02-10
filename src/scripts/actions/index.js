import drawPaintGrid from '@scripts/tools/paint_grid'
import drawSelectionBlock from '@scripts/tools/selection_block'

export function clickTool ({ pointer, paintMode, appConfig }) {
  let x = parseInt(pointer.x/appConfig.gridSize)*appConfig.gridSize
  let y = parseInt(pointer.y/appConfig.gridSize)*appConfig.gridSize
  var gridReferenceKey = `${x},${y}`

  let scene = pointer.manager.game.scene.scenes[0]
  paintMode({ x, y, gridReferenceKey, size: appConfig.gridSize, scene: scene  })
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
  selectionRect.x = parseInt(pointer.x/appConfig.gridSize)*appConfig.gridSize;
  selectionRect.y = parseInt(pointer.y/appConfig.gridSize)*appConfig.gridSize;
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
