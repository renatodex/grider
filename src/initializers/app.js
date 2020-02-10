import Phaser from 'phaser'
import { MainScene } from '@scenes/main_scene'

export function AppInitializer ({
  canvasWidth,
  canvasHeight,
  gridSize
}) {
  var game = new Phaser.Game({
      type: Phaser.AUTO,
      width: canvasWidth,
      height: canvasHeight,
      input: { queue: true },
  });

  game.appConfig = {
    canvasWidth,
    canvasHeight,
    gridSize,
    totalGridX: canvasWidth / gridSize,
    totalGridY: canvasHeight / gridSize
  }

  game.scene.add('MainScene', MainScene, true, {});

  return { game }
}
