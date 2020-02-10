import drawPaintBlock from '@scripts/tools/paint_block'
import drawPaintGrid from '@scripts/tools/paint_grid'
import drawSelectionBlock from '@scripts/tools/selection_block'
import eraseBlock from '@scripts/tools/erase_block'
import { ToolManager } from '@scripts/util/tool_manager'

export function ToolsInitializer (game) {
  var toolManager = new ToolManager(game);
  toolManager.add({
    name: 'PaintBlock',
    call: (options) => drawPaintBlock(options)
  })

  toolManager.add({
    name: 'PaintGrid',
    call: (options) => drawPaintGrid(options)
  })

  toolManager.add({
    name: 'PaintSelectionBlock',
    call: (options) => drawSelectionBlock(options)
  })

  toolManager.add({
    name: 'EraseBlock',
    call: (options) => eraseBlock(options)
  } )

  let PaintBlock = toolManager.get('PaintBlock')
  let PaintGrid = toolManager.get('PaintGrid')
  let PaintSelectionBlock = toolManager.get('PaintSelectionBlock')
  let EraseBlock = toolManager.get('EraseBlock')

  return {
    PaintBlock, PaintGrid, PaintSelectionBlock, EraseBlock
  }
}
