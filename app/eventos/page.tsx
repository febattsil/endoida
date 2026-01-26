'use client'
import { useState } from "react"
import styles from "../../styles/Evento.module.css"
import EventoComp from "@/components/EventoComp"

export default function EventosPage(){

    const[offSet, setOffSet] = useState(0)
    const EVENT_WIDTH = window.innerWidth - 100
    const GAP = 20

    
    
    return(
        <div className={styles.page}>
            <div className={styles.eventoslist}>
                <button className={styles.eventooption} onClick={() => setOffSet(0 * (EVENT_WIDTH + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(1 * (EVENT_WIDTH + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(2 * (EVENT_WIDTH + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(3 * (EVENT_WIDTH + GAP))}/>
            </div>
            <div className={styles.eventowrapper}>
                <div className={styles.eventostrack}
                style={{
                transform: `translateX(-${offSet}px)`
                }}>
                    {
                        
                        <EventoComp isSelected={true} />

                    }
                </div>
            </div>
        </div>
    )
}