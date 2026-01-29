import styles from '../styles/Evento.module.css'
import MainPlayer from './MainPlayerComp'

export default function MainPlayersComp({ mainplayers = [] } : any) {

    if(!mainplayers.length) return null

    return (
        <div className={styles.mainplayers}>
            {
                mainplayers.map((mainplayer : any, index: number) => {
                    return <MainPlayer
                    key={index}
                    mainplayer={mainplayer} />
                })

            }
        </div>
    )
}