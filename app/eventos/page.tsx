'use client'

import { useEffect, useState } from "react"
import styles from "../../styles/Evento.module.css"
import EventoComp from "@/components/EventoComp"

export default function EventosPage(){

    const[offSet, setOffSet] = useState(0)
    const[events, setEvents] = useState([])
    const [eventWidth, setEventWidth] = useState(0)

    useEffect(() => {
        setEventWidth(window.innerWidth - 100)
    }, [])

    const GAP = 20

    useEffect(() => {
        async function fetchEvents(){
            const res = await fetch('/api/eventos')
            const endoida = await res.json()
            setEvents(endoida)
        }
    
        fetchEvents()

    },[])


    return(
        <div className={styles.page}>
            <div className={styles.eventoslist}>
                <button className={styles.eventooption} onClick={() => setOffSet(0 * (eventWidth + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(1 * (eventWidth + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(2 * (eventWidth + GAP))}/>
                <button className={styles.eventooption} onClick={() => setOffSet(3 * (eventWidth + GAP))}/>
            </div>
            <div className={styles.eventowrapper}>
                <div className={styles.eventostrack}
                style={{
                transform: `translateX(-${offSet}px)`
                }}>
                    {
                        
                            events.map((event : any) => {
                                return <EventoComp
                                key={event._id}
                                evento={event} />
                            })
                        

                    }
                </div>
            </div>
        </div>
    )
}