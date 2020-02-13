import Phaser from 'phaser'

export class ApplicationScene extends Phaser.Scene {
  constructor (options = undefined) {
    super(options)
  }

  create (params = {}) {
    this.appConfig = this.game.appConfig
    this.scene = this
    this.game.currentScene = this

    this.sceneEssentials = {
      appConfig: this.appConfig,
      scene: this.scene
    }
  }
}
