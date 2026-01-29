import styles from '../styles/Evento.module.css'
import MainPlayer from './MainPlayerComp'

export default function MainPlayersComp({ mainplayers } : any) {
    return (
        <div className={styles.mainplayers}>
            {
                mainplayers.map((mainplayer : any) => {
                    return <MainPlayer mainplayer={mainplayer} />
                })

            }
        </div>
    )
}