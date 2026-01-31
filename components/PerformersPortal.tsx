// components/PerformersPortal.tsx
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import styles from '../styles/Evento.module.css'
import EventoLogoComp from './EventoLogoComp'

export default function PerformersPortal({ active, evento }: any) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className={`${styles.performers} ${active ? styles.active : ''}`}>
      
      <h2>DJ SAMPLE</h2>
      <div>drag</div>
    </div>,
    document.body
  )
}
