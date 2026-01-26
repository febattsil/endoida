"use client"

import MenuMesh from '@/components/MenuMesh'
import RadioIslandMesh from '@/components/RadioIslandMesh'
import styles from "../styles/Main.module.css"
import { useEffect, useState } from 'react'

export default function Home() {

  const[menu, setMenu] = useState<boolean>(false)
  const[mobile, setMobile] = useState<boolean>()

  useEffect(() => {
        const onResize = () => setMobile(window.innerWidth <= 800)
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
      }, [])
  
  return (

    
    <div className={styles.principal}>

      {mobile && <button style={{cursor: "pointer", fontSize: 100, zIndex: 10, position: "sticky", paddingRight: "600px", paddingBottom: "600px", height: "50px", width: "50px", transform: "rotate(90deg)" }}onClick={() => setMenu(!menu)}>|||</button> }

      <MenuMesh enable={menu} />

      {/* Radio Island */}
      <section className={styles.radioIsland}>
        
      </section>

      <main className={styles.content}>
        <section style={{ minHeight: '2000px' }} />
      </main>

    </div>
    
  )
}
