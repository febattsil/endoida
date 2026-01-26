'use client'

import { RoundedBox, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function MenuButton({ label, userData, href }: any) {
  const router = useRouter()
  const boxRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const[hovered, setHovered] = useState(false)

  useFrame(() => {
    if(!boxRef.current) return

    const targetZ = hovered ? -1 : 0.15
    boxRef.current.position.z = THREE.MathUtils.lerp(
      boxRef.current.position.z,
      targetZ,
      0.15
    )
    const targetScale = hovered ? 0.97 : 1
    boxRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, 1),
      0.15
      )
  })

  return (
    <group
      ref={groupRef}
      userData={userData}
      onPointerDown={(e) => {
        e.stopPropagation()
        router.push(href)
      }}
      onPointerOver={(e) => {
                  e.stopPropagation()
                  setHovered(true)
                  document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
                  setHovered(false)
                  document.body.style.cursor = 'default'}}
    >
      <RoundedBox ref={boxRef}
                  args={[1.8, 0.6, 0.15]}
                  radius={0.18}>
        <meshStandardMaterial
          color="#ead624"
          metalness={5}
          roughness={0.7}
        />

      <Text
        position={[0, 0, 0.25]}
        fontSize={0.18}
        color="black"
      >
        {label}
      </Text>

      </RoundedBox>

    </group>
  )
}
