import { ToolsInitializer } from '@initializers/tools'
import { AppInitializer } from '@initializers/app'

export function Main () {
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
