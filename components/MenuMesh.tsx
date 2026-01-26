'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import useScrollProgress from './useScrollProgress'
import MenuButton from './MenuButton'
import MenuPill from './MenuPill'
import LogoMesh from './LogoMesh'
import RadioIsland from './RadioIslandMesh'

function MenuMesh({ enable } : { enable : boolean }) {
  const group = useRef<THREE.Group>(null!)
  const scroll = useScrollProgress()
  const { viewport } = useThree()
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const onResize = () => {setMobile(window.innerWidth <= 800)}
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useFrame((_, delta) => {
    if (!group.current) return

    const t = THREE.MathUtils.clamp(scroll / 0.45, 0, 1)
    const eased = t * t * (3 - 2 * t)

    // 🔹 GROUP TRANSFORM
    if (!mobile) {
      group.current.position.y = THREE.MathUtils.lerp(-4, 3.5, eased)
      group.current.scale.setScalar(THREE.MathUtils.lerp(1.15, 1, eased))
    } else {
      group.current.position.set(0, 2, 0)
      group.current.scale.setScalar(1.15)
    }

    // 🔹 CHILDREN LAYOUT
    const baseX = viewport.width * 0.22
    const curveDepth = 1.4
    const verticalSpacing = 1.1

    group.current.children.forEach((child: any) => {
      const { side, order, type } = child.userData
      if (side == null || order == null) return

      if (mobile) {
        const spacing = viewport.height * 0.1
        const y = -order * spacing - spacing * 0.5

        const hiddenX = side * viewport.width * 1.2
        const visibleX = 0

        const targetX = enable ? visibleX : hiddenX

        child.position.x = THREE.MathUtils.damp(
          child.position.x,
          targetX,
          8,
          delta
        )

        child.position.y = y
        child.position.z = 0
        return
      }

      // 🖥 DESKTOP — curva côncava REAL
      const widthFactor = type === 'menu-pill' ? 1.5 : 0.35

      const xStart = side * viewport.width * 1.1
      const yStart = -6

      const xEnd =
        side * (baseX + Math.abs(order) * widthFactor)

      const yEnd =
        -order * verticalSpacing

      const zEnd =
        -Math.abs(order) * curveDepth

      child.position.x = THREE.MathUtils.lerp(xStart, xEnd, eased)
      child.position.y = THREE.MathUtils.lerp(yStart, yEnd, eased)
      child.position.z = THREE.MathUtils.lerp(0, zEnd, eased)
    })
  })


  if(mobile){
    return (
      <group ref={group}>
        <MenuButton label="Sobre" href="/sobre" userData={{ side: -1, order: 0 }} />
        <MenuButton label="Eventos" href="/eventos" userData={{ side: -1, order: 1 }} />
        <MenuButton label="Fotos" href="/fotos" userData={{ side: 1, order: 2 }} />
        <MenuButton label="Contato" href="/contato" userData={{ side: 1, order: 3 }} />
      </group>
    )
  }else{
    return(
      <group ref={group}>
        <MenuPill
          buttons={[
            { id: 'sobre', label: 'Sobre', href: '/sobre' },
            { id: 'fotos', label: 'Fotos', href: '/fotos' },
          ]}
          userData={{ type: 'menu-pill', side: -1, order: 1 }}
        />

        <MenuPill
          buttons={[
            { id: 'eventos', label: 'Eventos', href: '/eventos' },
            { id: 'contato', label: 'Contato', href: '/contato' },
          ]}
          userData={{ type: 'menu-pill', side: 1, order: 1 }}
        />
      </group>
    )
  }
}

export default function Menu3DCanvas({ enable } : { enable : boolean }) {

    const canvasRef = useRef<HTMLCanvasElement>(null!)

  return (
    <Canvas
      onCreated={({ gl }) => {
      canvasRef.current = gl.domElement
      }}
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: 'sticky',
        inset: 0,
        pointerEvents: 'auto',
        width: '100vw',
        height: '100vh',
        zIndex: 1,

      }}
    >

      <ambientLight intensity={0.8} />

      <LogoMesh enable={enable}/>

      <MenuMesh enable={enable}/>

    </Canvas>
  )
}
