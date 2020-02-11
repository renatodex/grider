import Phaser from 'phaser'
import { MainScene } from '@scenes/main_scene'

export function AppInitializer ({
  canvasElement,
  canvasWidth,
  canvasHeight,
  gridSize,
}) {
  const Emitter = new Phaser.Events.EventEmitter();

  const Game = new Phaser.Game({
      type: Phaser.WEBGL,
      width: canvasWidth,
      height: canvasHeight,
      parent: canvasElement,
      mode: Phaser.DOM.FIT,
      input: { queue: true },
  });

  Game.emitter = Emitter

  Game.appConfig = {
    canvasWidth,
    canvasHeight,
    gridSize,
    canvasElement,
    totalGridX: canvasWidth / gridSize,
    totalGridY: canvasHeight / gridSize,
  }

  Game.scene.add('MainScene', MainScene, true, {});

  return { Game, Emitter }
}
