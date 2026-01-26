import { RoundedBox, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function RadioPushIconMesh({
  enabled,
  setEnabled,
}: {
  enabled: boolean
  setEnabled: any
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if (!groupRef.current || !meshRef.current) return

    const targetX = enabled ? 2 : -1

    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      8,
      delta
    )

  })

  return (
    <group ref={groupRef}
           position={[-1, -0.7, 1]}>
      <RoundedBox
        ref={meshRef}
        args={enabled ? [0.3, 0.3, 0.3] : [0.5, 0.5, 0.5]}
        radius={enabled ? 0.15 : 0.25}
        onPointerDown={(e) => {
          e.stopPropagation()
          setEnabled(!enabled)
        }}
      >
        <meshStandardMaterial color="#fc2828" metalness={5}
                                  roughness={0.7}  />
        <Text
          position={[-0.1, -0.1, 0.3]}
          fontSize={enabled ? 0.4 : 0.8}
          color="black"
          anchorX="center"
          anchorY="middle"
          rotateX={enabled ? 270 : 0}
        >
          +
        </Text>
      </RoundedBox>
    </group>
  )
}
