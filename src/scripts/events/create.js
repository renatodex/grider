import drawPaintBlock from '@scripts/tools/paint_block'
import drawPaintGrid from '@scripts/tools/paint_grid'
import drawSelectionBlock from '@scripts/tools/selection_block'
import eraseBlock from '@scripts/tools/erase_block'
import { ToolsInitializer } from '@initializers/tools'
import { clickTool, dragTool, createSelectionBlock, createGridBlocks } from '../actions/index'

export function Create (scene)
{

  let paintMode = drawPaintBlock
  // Create the basic Blocks for the editor to work
  let selectionRect = createSelectionBlock({ config: appConfig, scene })
  let gridBlocks = createGridBlocks({ config: appConfig, scene })

  // Register the PointerDown event
  scene.input.on('pointerdown', function (pointer) {
    clickTool ({
      pointer,
      paintMode: paintMode,
      config: appConfig,
      gameScene: scene
    })
  })

  scene.input.keyboard.on('keydown-E', function (event) {
    paintMode = eraseBlock
  })

  scene.input.keyboard.on('keydown-P', function (event) {
    paintMode = drawPaintBlock
  })

  // Register the PointerMove event
  scene.input.on('pointermove', function (pointer) {
    dragTool({
      pointer,
      paintMode: paintMode,
      config: appConfig,
      gameScene: scene
    })
  })
}
