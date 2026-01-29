import styles from '../styles/Evento.module.css'
import ReactionBtnComp from './ReactionBtnComp'

export default function PlayerComp({ userLikes, player, characters } : any ) {
    return(
        <div className={styles.player}>
                <div className={styles.nickname}>{player.name}</div>
                <ReactionBtnComp
                userLikes={userLikes}
                player={player}
                characters={characters}
                />
        </div>
    )
}