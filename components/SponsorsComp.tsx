import styles from '../styles/Evento.module.css'
import SponsorComp from './SponsorComp'


export default function SponsorsComp( { sponsors } : any ) {
    return (
        <div className={styles.sponsors}>
            {
                sponsors.map((sponsor : any) => {
                    return <SponsorComp sponsor={sponsor}/>
                })

            }
        </div>
    )
}