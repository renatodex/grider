import Phaser from 'phaser'
import { MainScene } from '@scenes/main_scene'

export function AppInitializer ({
  canvasWidth,
  canvasHeight,
  gridSize
}) {
  var appConfig = {
    canvasWidth,
    canvasHeight,
    gridSize,
    totalGridX: canvasWidth / gridSize,
    totalGridY: canvasHeight / gridSize
  }

  var config = {
      type: Phaser.AUTO,
      width: appConfig.canvasWidth,
      height: appConfig.canvasHeight,
      input: { queue: true },
  };

  var game = new Phaser.Game(config);
  game.appConfig = appConfig
  game.scene.add('MainScene', MainScene, true, {});

  return { game, appConfig }
}
