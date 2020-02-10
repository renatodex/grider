import { buildGridKey } from '@scripts/util/helpers'

export default function({
  x,
  y,
  scene,
}) {
  let block = scene.children.getByName(
    buildGridKey(x, y)
  )

  if (block) {
    block.destroy();
  }
}
