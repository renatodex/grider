import { ToolsInitializer } from '@initializers/tools'
import { AppInitializer } from '@initializers/app'
import { Drawer } from '@scripts/util/drawer'

export class Main {
  debug () {
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

  AppInitializer (options) {
    this.grider = AppInitializer(options)
    return this.grider
  }

  ToolsInitializer (options) {
    ToolsInitializer()
  }

  Drawer () {
    return Drawer(this.grider)
  }
}
