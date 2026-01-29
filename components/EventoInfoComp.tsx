import styles from '../styles/Evento.module.css'

export default function EventoInfo({ name, description, locationlap } : any) {
    return(
        <div className={styles.eventoinfo}>
            <div className={styles.eventoTitle}>{name}</div>
            <div className={styles.details}>
                <div className={styles.description}>
                        {description}
                </div>
                <div className={styles.location}>
                    {locationlap}
                </div>
            </div>
        </div>
    )
}