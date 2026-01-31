'use client'

import { Canvas } from "@react-three/fiber"
import LogoMesh from "./LogoMesh"

export default function EventoLogoComp({ spin } : { spin : boolean }) {

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: 'relative',
        inset: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        zIndex: 1,

      }}
      frameloop="always"
    >

      <ambientLight intensity={1} />

      <LogoMesh
      forEventComp={true}
      enable={spin}/>

    </Canvas>
  )
}