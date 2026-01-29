import styles from '../styles/Evento.module.css'
import SponsorComp from './SponsorComp'


export default function SponsorsComp( { sponsors = [] } : any ) {

    if(!sponsors.length) return null

    return (
        <div className={styles.sponsors}>
            {
                sponsors.map((sponsor : any, index: number) => {
                    return <SponsorComp
                    key={index}
                    sponsor={sponsor}/>
                })

            }
        </div>
    )
}