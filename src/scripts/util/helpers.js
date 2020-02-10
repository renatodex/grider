export function buildGridKey (x, y) {
  return `block_${x},${y}`
}

export function calculateAxisPosition (pixelAxisAmount, gridSize) {
  parseInt(pixelAxisAmount/gridSize)*gridSize
}
