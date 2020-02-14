import Phaser from 'phaser'
import drawPaintBlock from '@scripts/tools/paint_block'
import eraseBlock from '@scripts/tools/erase_block'
import { clickTool, dragTool, createSelectionBlock, createGridBlocks } from '@scripts/actions/index'
import { ApplicationScene } from '@scenes/application_scene'

export class MainScene extends ApplicationScene {
  constructor() {
    super({ key: 'MainScene', active: true })
  }

  create (data) {
    super.create(data)

    let paintMode = drawPaintBlock
    let selectionRect = createSelectionBlock({ ...this.sceneEssentials })
    let gridBlocks = createGridBlocks({ ...this.sceneEssentials })

    // Register the PointerDown event
    this.input.on('pointerdown', (pointer) => {
      clickTool ({ pointer, paintMode, ...this.sceneEssentials })
    })

    this.input.keyboard.on('keydown-PLUS', (event) => {
      this.appConfig.coverBorders = true
    })

    this.input.keyboard.on('keydown-MINUS', (event) => {
      this.appConfig.coverBorders = false
    })

    this.input.keyboard.on('keydown-E', function (event) {
      paintMode = eraseBlock
    })

    this.input.keyboard.on('keydown-P', function (event) {
      paintMode = drawPaintBlock
    })

    this.input.keyboard.on('keydown-X', (event) => {
      this.sceneEssentials.appConfig.selectedColor =
        this.sceneEssentials.appConfig.availableColors[0]
    })

    this.input.keyboard.on('keydown-C', (event) => {
      let i = this.sceneEssentials.appConfig.availableColors.indexOf(
        this.sceneEssentials.appConfig.selectedColor
      )
      let nextColor = this.sceneEssentials.appConfig.availableColors[i + 1]
      if (nextColor == undefined) {
        nextColor = this.sceneEssentials.appConfig.availableColors[0]
      }

      this.sceneEssentials.appConfig.selectedColor = nextColor
    })

    // Register the PointerMove event
    this.input.on('pointermove', (pointer) => {
      dragTool({ pointer, paintMode, ...this.sceneEssentials })
    })

    this.game.emitter.emit('scene/ready')
  }

  update () {
    let selectionRect = this.children.getByName('selectionRect')
    selectionRect.setStrokeStyle(2, this.appConfig.selectedColor, 1)
  }
}
