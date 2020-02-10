import Phaser from 'phaser'
import { Create } from '@scripts/events/create'

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene', active: true })
  }

  create (data) {
    console.log(data)
    console.log(this)
    Create(this)
  }
}
