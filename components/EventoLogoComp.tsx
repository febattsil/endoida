'use client'

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import LogoMesh from "./LogoMesh"

export default function EventoLogoComp() {

    const canvasRef = useRef<HTMLCanvasElement>(null!)

  return (
    <Canvas
      onCreated={({ gl }) => {
      canvasRef.current = gl.domElement
      }}
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'auto',
        width: '150px',
        height: '150px',
        zIndex: 1,

      }}
    >

      <ambientLight intensity={1} />

      <LogoMesh
      forEventComp={true}
      enable={true}/>

    </Canvas>
  )
}