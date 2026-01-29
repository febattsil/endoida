import styles from '../styles/Evento.module.css'

export default function SponsorComp({ sponsor = '' } : any ) {
    return (
        <div 
        className={styles.sponsor}>
            {sponsor}
        </div>
    )
}