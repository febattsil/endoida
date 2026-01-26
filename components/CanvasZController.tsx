import { useFrame } from "@react-three/fiber"
import useScrollProgress from "./useScrollProgress"

export default function CanvasZController({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) {
  const scroll = useScrollProgress()

  useFrame(() => {
    if (!canvasRef.current) return

    const fullyFormed = scroll >= 0.45

    canvasRef.current.style.zIndex = fullyFormed ? '10' : '-1'
    canvasRef.current.style.pointerEvents = fullyFormed ? 'auto' : 'none'
  })

  return null
}
