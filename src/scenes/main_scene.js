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

    this.input.keyboard.on('keydown-E', function (event) {
      paintMode = eraseBlock
    })

    this.input.keyboard.on('keydown-P', function (event) {
      paintMode = drawPaintBlock
    })

    // Register the PointerMove event
    this.input.on('pointermove', (pointer) => {
      dragTool({ pointer, paintMode, ...this.sceneEssentials })
    })
  }
}
