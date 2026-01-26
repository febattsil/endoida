import { Canvas } from "@react-three/fiber";
import RadioIslandMesh from "./RadioIslandMesh";

export default function Main() {
    return(
        <Canvas
              camera={{ position: [0, 0, 10], fov: 45 }}
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'auto',
                width: '100vw',
                height: '100vh',
                zIndex: 1,
        
              }}
            >
        
              <ambientLight intensity={0.8} />
        
              <SwiperMainGalleryMesh/>

              <RadioIslandMesh/>
        
            </Canvas>
    )
}