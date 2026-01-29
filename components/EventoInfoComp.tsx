import styles from '../styles/Evento.module.css'

export default function EventoInfo({ eventoinfo } : any) {
    return(
        <div className={styles.eventoinfo}>
            <div className={styles.eventoTitle}>{eventoinfo.name}</div>
            <div className={styles.details}>
                <div className={styles.description}>
                        {eventoinfo.description}
                </div>
                <div className={styles.location}>
                    {eventoinfo.locationlap}
                </div>
            </div>
        </div>
    )
}