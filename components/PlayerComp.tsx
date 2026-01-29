import styles from '../styles/Evento.module.css'
import ReactionBtnsComp from './ReactionBtnComp'

export default function PlayerComp({ player } : any ) {
    return(
        <div className={styles.player}>
                <div className={styles.nickname}>{player.name}</div>
                <ReactionBtnsComp
                userLikes={player.likes}
                />
        </div>
    )
}