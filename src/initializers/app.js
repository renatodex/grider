import Phaser from 'phaser'
import { MainScene } from '@scenes/main_scene'

export function AppInitializer ({
  canvasElement,
  canvasWidth,
  canvasHeight,
  gridSize,
}) {
  var game = new Phaser.Game({
      type: Phaser.WEBGL,
      width: canvasWidth,
      height: canvasHeight,
      canvas: canvasElement,
      input: { queue: true },
  });

  game.appConfig = {
    canvasWidth,
    canvasHeight,
    gridSize,
    canvasElement,
    totalGridX: canvasWidth / gridSize,
    totalGridY: canvasHeight / gridSize,
  }

  game.scene.add('MainScene', MainScene, true, {});

  return { game }
}
