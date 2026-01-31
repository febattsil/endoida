'use client'

import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import useScrollProgress from './useScrollProgress'
import fontJson from '@/public/fonts/gulfs_display_extra_expanded_italic.typeface.json'
import ExplosionMesh from './ExplosionMesh'
import { useRouter, usePathname } from 'next/navigation'

export default function LogoMesh({ forEventComp, enable } : { enable: boolean, forEventComp: boolean } ) {

  const ref = useRef<THREE.Group>(null!)
  const flyTime = useRef(0)
  const progressRef = useRef(0)
  const[mobile, setMobile] = useState(false)
  const scroll = useScrollProgress()
  const router = useRouter()
  const pathname = usePathname()

  type FlyState = 'idle' | 'playing' | 'done'
  const flyState = useRef<FlyState>('idle')

  const FLY_DURATION = mobile ? 2 : 1 
  const START_X = -7
  const END_X = 7
  const FIXED_Y = 2
  const FIXED_Z = mobile ? 3 : 1

  const hiddenY = -30
  const visibleY = 2.2

  const hiddenZ = 30
  const visibleZ = mobile ? 3 : 1

  const hiddenScale = 1
  const visibleScale = mobile ? 0.12 : 0.15

  useEffect(() => {
      if(forEventComp) 
        ref.current.scale.set(0.5, 0.5, 0.5)
      return
      const onResize = () => setMobile(window.innerWidth <= 800)
      onResize()
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])


  useFrame((state, delta) => {
  if(forEventComp) return
  if (!ref.current || pathname !== '/') return

  const t = state.clock.elapsedTime
  const targetProgress = mobile
    ? (enable ? 1 : 0)
    : THREE.MathUtils.clamp(scroll, 0, 1)

  progressRef.current = THREE.MathUtils.damp(
    progressRef.current,
    targetProgress,
    6, // velocidade única
    delta
  )

  const p = progressRef.current

  const targetY = THREE.MathUtils.lerp(hiddenY, visibleY, p)
  const targetZ = THREE.MathUtils.lerp(hiddenZ, visibleZ, p)
  const targetScale = THREE.MathUtils.lerp(hiddenScale, visibleScale, p)

  // posição
  ref.current.position.y = THREE.MathUtils.damp(
    ref.current.position.y,
    targetY,
    6,
    delta
  )

  ref.current.position.z = THREE.MathUtils.damp(
    ref.current.position.z,
    targetZ,
    6,
    delta
  )

  // escala
  ref.current.scale.setScalar(
    THREE.MathUtils.damp(ref.current.scale.x, targetScale, 6, delta)
  )

  // idle tilt
  const tiltX = Math.sin(t * 0.6) * 0.3
  const tiltY = Math.cos(t * 0.4) * 0.36

  ref.current.rotation.x = THREE.MathUtils.damp(
    ref.current.rotation.x,
    tiltX,
    4,
    delta
  )

  ref.current.rotation.y = THREE.MathUtils.damp(
    ref.current.rotation.y,
    tiltY,
    4,
    delta
  )
})

useFrame((_, delta) => {
  if(forEventComp) return
  if (!ref.current) return
  if (!pathname.startsWith('/eventos')) return
  if (flyState.current === 'done') return

  // inicia apenas uma vez
  if (flyState.current === 'idle') {
    flyState.current = 'playing'
    flyTime.current = 0

    ref.current.position.set(START_X, FIXED_Y, FIXED_Z)
    ref.current.rotation.set(0, 0, 0)
    ref.current.scale.setScalar(0.2)
  }

  flyTime.current += delta
  const t = THREE.MathUtils.clamp(
    flyTime.current / FLY_DURATION,
    0,
    1
  )

  // movimento horizontal
  ref.current.position.x = THREE.MathUtils.lerp(
    START_X,
    END_X,
    t
  )

  // meia rotação suave
  ref.current.rotation.y = THREE.MathUtils.lerp(
    0,
    Math.PI,
    t
  )

  // easing mais bonito
  const eased = THREE.MathUtils.smoothstep(t, 0, 1)

  ref.current.rotation.y = Math.PI * eased
  ref.current.position.x =
    START_X + (END_X - START_X) * eased

  // finaliza
  if (t >= 1) {
    flyState.current = 'done'
  }
})

  return (
      <group ref={ref}>

        <directionalLight position={[5, 5, 5]} intensity={mobile ? 0.3 : 0.5} />
      
        <directionalLight position={[-5, -5, 5]} intensity={mobile ? 0.3 : 0.5} />

        <directionalLight position={[5, -5, 1]} intensity={mobile ? 0.3 : 0.5} />

        <directionalLight position={[-5, 5, 5]} intensity={mobile ? 0.3 : 0.5} />

        <ExplosionMesh />

        <Center>
            <Text3D
            font={fontJson as any}
            size={2.5}
            height={1}
            lineHeight={0.5}
            bevelEnabled
            bevelThickness={0.12}
            bevelSize={0.08}
            bevelSegments={10}
            curveSegments={24}
            onPointerDown={(e) => {
              e.stopPropagation();
              router.push("/")}}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = 'pointer'
            }}
            onPointerLeave={document.body.style.cursor = 'default'}
            >
            ENDOIDA{'\n'}FLORIPA
            <meshStandardMaterial
                color="#ffffff"
                metalness={0.9}
                roughness={0.35}
            />
            </Text3D>
        </Center>

      </group>
  )
}
