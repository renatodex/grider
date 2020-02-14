import Phaser from 'phaser'
import { MainScene } from '@scenes/main_scene'
import { AvailableColors } from '@scripts/util/colors'

export function AppInitializer ({
  canvasElement,
  canvasWidth,
  canvasHeight,
  gridSize,
  bgColor,
  strokeColor
}) {
  const Emitter = new Phaser.Events.EventEmitter();

  const Game = new Phaser.Game({
      type: Phaser.WEBGL,
      width: canvasWidth,
      height: canvasHeight,
      parent: canvasElement,
      mode: Phaser.DOM.FIT
  });

  Game.emitter = Emitter

  let availableColors = Object.values(AvailableColors)

  Game.appConfig = {
    totalGridX: canvasWidth / gridSize,
    totalGridY: canvasHeight / gridSize,
    availableColors: availableColors,
    selectedColor: availableColors[0],
    coverBorders: false,
    canvasWidth,
    canvasHeight,
    gridSize,
    canvasElement,
    bgColor,
    strokeColor,
  }

  Game.scene.add('MainScene', MainScene, true, {});

  return { Game, Emitter }
}
