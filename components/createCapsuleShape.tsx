

function createCapsuleShape(side: 'left' | 'right') {
  const shape = new THREE.Shape()

  const width = 6
  const height = 2
  const curveDepth = 1.4

  shape.moveTo(-width / 2, -height / 2)

  // base
  shape.lineTo(width / 2, -height / 2)

  // curva externa
  shape.quadraticCurveTo(
    width / 2 + 0.6,
    0,
    width / 2,
    height / 2
  )

  shape.lineTo(-width / 2, height / 2)

  // curva interna (lado do logo)
  shape.quadraticCurveTo(
    side === 'left' ? -curveDepth : curveDepth,
    0,
    -width / 2,
    -height / 2
  )

  return shape
}
