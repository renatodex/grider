export default function({
  x,
  y,
  scene,
}) {
  var gridReferenceKey = `${x},${y}`
  let block = scene.children.getByName(`block_${gridReferenceKey}`)

  if (block) {
    block.destroy();
  }
}
