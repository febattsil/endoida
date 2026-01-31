'use client'

import { Canvas } from "@react-three/fiber"
import LogoMesh from "./LogoMesh"

export default function EventoLogoComp() {

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        zIndex: 1,

      }}
      frameloop="demand"
    >

      <ambientLight intensity={1} />

      <LogoMesh
      forEventComp={true}
      enable={true}/>

    </Canvas>
  )
}