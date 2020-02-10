// Draw Functions
import Phaser from 'phaser'
import drawPaintBlock from './scripts/tools/paint_block'
import drawPaintGrid from './scripts/tools/paint_grid'
import drawSelectionBlock from './scripts/tools/selection_block'
import eraseBlock from './scripts/tools/erase_block'
import { ToolManager } from './scripts/util/tool_manager'
import { ToolsInitializer } from './initializers/tools'
import { AppInitializer } from './initializers/app'
import { MainScene } from './scenes/main'

export function Main () {
  let paintMode;

  function debug () {
    game.scene
    .getScenes(true)[0]
    .load.setBaseURL()
    .setPath()
    .setPrefix()
    .scenePlugin(
      'PhaserDebugDrawPlugin',
      'https://cdn.jsdelivr.net/npm/phaser-plugin-debug-draw@4.5.0',
      'debugDraw',
    )
    .start();
  }

  return { AppInitializer, ToolsInitializer }
}
