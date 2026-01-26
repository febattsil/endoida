import { RoundedBox, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import RadioPushIconMesh from './RadioPushIconMesh'


function RadioIslandMesh({
  displayMusic = 'Sample Music Display',
  userData,
}: any) {
  const [enabled, setEnabled] = useState(false)
  
  const ISLAND_WIDTH = 2.2
  const ISLAND_HEIGHT = 0.6
  const DISPLAY_WIDTH = 1.5

  const groupRef = useRef<THREE.Group>(null!)
  const displayGroupRef = useRef<THREE.Mesh>(null!)
  const displayContentRef = useRef<THREE.Mesh>(null!)

useFrame((_, delta) => {
  if (!groupRef.current || !displayGroupRef.current || !displayContentRef.current) return

  
  groupRef.current.scale.y = THREE.MathUtils.damp(
    groupRef.current.scale.y,
    enabled ? 3 : 1,
    8,
    delta
  )

  groupRef.current.scale.x = THREE.MathUtils.damp(
    groupRef.current.scale.x,
    enabled ? 3 : 1,
    8,
    delta
  )

  displayGroupRef.current.position.y = THREE.MathUtils.damp(
    displayGroupRef.current.position.y,
    -0.2,
    10,
    1
  )

  displayGroupRef.current.scale.y = 1 / displayGroupRef.current.scale.y

  const offsetX = (displayGroupRef.current.scale.x - 1) * (DISPLAY_WIDTH / 2)

  displayGroupRef.current.position.x = THREE.MathUtils.damp(
    displayGroupRef.current.position.x,
    -0.1 + offsetX,
    10,
    delta
  )

  displayContentRef.current.scale.x = 1 / displayGroupRef.current.scale.x
})

  return (
    <group position={[3.5, 4, 0]} userData={userData}>
      <group>
        <group ref={groupRef}>
          <RoundedBox
            args={[ISLAND_WIDTH, ISLAND_HEIGHT, 0.6]}
            radius={0.3}
            position={[0.05, - ISLAND_HEIGHT / 1.8, 0]}
          >
            <meshStandardMaterial color="#ead624" 
                                  metalness={8}
                                  roughness={0.7} />
          </RoundedBox>

          <group  ref={displayGroupRef}
                  position={enabled ? [0, -2, 0.35] : [0, -2, 0]}>
            <RoundedBox
              args={[DISPLAY_WIDTH, 0.2, 0.1]}
              radius={0.1}
            >
              <meshStandardMaterial color="black" roughness={0.5} />
            </RoundedBox>
            <group ref={displayContentRef}>
              <Text
                position={[0, 0, 0.1]}
                fontSize={0.14}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {displayMusic}
              </Text>
            </group>
          </group>

        </group>

        <RadioPushIconMesh
          enabled={enabled}
          setEnabled={setEnabled}
        />
      </group>
    </group>
  )
}

export default function EndoidaRadio() {

  const canvasRef = useRef<HTMLCanvasElement>(null!)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
      const onResize = () => setMobile(window.innerWidth <= 800)
      onResize()
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
  },[])

  return (
        <Canvas
              onCreated={({ gl }) => {
              canvasRef.current = gl.domElement
              }}
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'auto',
                width: '100vw',
                height: '100vh',
                zIndex: 5,
                top: 0
              }}
            >
              <directionalLight position={[5, 5, 10]} intensity={0.5} />

              <ambientLight intensity={0.3} />

              <RadioIslandMesh displayMusic="Endoida Floripa!" userData={{ type: 'endoida-radio' }}/>

        </Canvas>
  )
}
