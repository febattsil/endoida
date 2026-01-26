'use client'

import * as THREE from 'three'
import { useMemo } from 'react'

export default function ExplosionShape() {
  const shape = useMemo(() => {
    const s = new THREE.Shape()

    const spikes = 18
    const outerRadius = 6.5
    const innerRadius = 4.5
    const chaos = 1.5

    for (let i = 0; i < spikes * 2; i++) {
      const angle = (i / (spikes * 2)) * Math.PI * 2
      const isOuter = i % 2 === 0

      let radius = isOuter ? outerRadius : innerRadius
      radius += (Math.random() - 0.5) * chaos

      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      if (i === 0) s.moveTo(x, y)
      else s.lineTo(x, y)
    }

    s.closePath()
    return s
  }, [])

  return (
    <mesh
      position={[0, 0, -2.5]}
      scale={[1.2, 1.2, 1]}
    >
      <extrudeGeometry
        args={[
          shape,
          {
            depth: 0.5,
            bevelEnabled: true,
            bevelThickness: 0.12,
            bevelSize: 0.12,
            bevelSegments: 6,
          },
        ]}
      />
      <meshStandardMaterial
        color="#f43a36"
        metalness={0.9}
        roughness={0.5}
      />
    </mesh>
  )
}
