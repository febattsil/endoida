'use client'

import { RoundedBox, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import * as THREE from 'three'

type MenuPillButtonProps = {
  label: string
  href: string
  position: [number, number, number]
}

export default function MenuPillButton({
  label,
  href,
  position,
}: MenuPillButtonProps) {
  const router = useRouter()
  const boxRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (!boxRef.current) return

    // depth negativo no hover
    const targetZ = hovered ? -0.12 : 0
    boxRef.current.position.z = THREE.MathUtils.lerp(
      boxRef.current.position.z,
      targetZ,
      0.15
    )

    // leve compressão
    const targetScale = hovered ? 0.96 : 1
    boxRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, 1),
      0.15
    )
  })

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = 'default'
      }}
      onPointerDown={(e) => {
        e.stopPropagation()
        router.push(href)
      }}
    >
      <RoundedBox
        ref={boxRef}
        args={[1.8, 0.6, 0.25]}
        radius={0.18}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#ead624"
          metalness={5}
          roughness={0.7}
        />
      <Text
        position={[0, 0, 0.16]}
        fontSize={0.18}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      </RoundedBox>

    </group>
  )
}
