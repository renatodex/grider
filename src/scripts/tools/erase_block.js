export default function({
  x,
  y,
  gameScene,
}) {
  var gridReferenceKey = `${x},${y}`
  let block = gameScene.children.getByName(`block_${gridReferenceKey}`)

  if (block) {
    block.destroy();
  }
}
