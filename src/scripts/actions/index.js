import drawPaintGrid from '@scripts/tools/paint_grid'
import drawSelectionBlock from '@scripts/tools/selection_block'

export function clickTool ({ pointer, paintMode, config }) {
  let x = parseInt(pointer.x/config.gridSize)*config.gridSize
  let y = parseInt(pointer.y/config.gridSize)*config.gridSize
  var gridReferenceKey = `${x},${y}`

  let scene = pointer.manager.game.scene.scenes[0]
  paintMode({ x, y, gridReferenceKey, size: config.gridSize, gameScene: scene  })
}

// Fired when user moves pointer through the grid
export function dragTool ({ pointer, paintMode, gameScene, config }) {
  positionSelectionBlock({ pointer, gameScene, config })

  if (pointer.isDown) {
    clickTool({ pointer, paintMode, config })
  }
};

// Set the Position of the Selection Block
export function positionSelectionBlock({ pointer, gameScene, config }) {
  let selectionRect = gameScene.children.getByName('selectionRect')
  selectionRect.x = parseInt(pointer.x/config.gridSize)*config.gridSize;
  selectionRect.y = parseInt(pointer.y/config.gridSize)*config.gridSize;
}

// Create the Selection Block
export function createSelectionBlock({ config, scene }) {
  return drawSelectionBlock({
    size: config.gridSize,
    x: 0,
    y: 0,
    gameScene: scene
  })
}

// Create Grid Blocks
export function createGridBlocks ({ config, scene }) {
  let gridBlocks = []
  for(let i = 0; i < config.totalGridX; i++) {
    for(let j = 0; j < config.totalGridY; j++) {
      gridBlocks.push(
        drawPaintGrid({
          x: i*config.gridSize,
          y: j*config.gridSize,
          size: config.gridSize,
          gameScene: scene
        })
      )
    }
  }
  return gridBlocks
}
