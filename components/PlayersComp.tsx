import PlayerComp from "./PlayerComp"
import styles from '../styles/Evento.module.css'

export default function PlayersComp({ userLikes, players, characters } : any) {
    return (
        <div className={styles.players}>
        { 
            players.map((player : any) => {
            return ( 
                <PlayerComp
                key={player.id}
                userLikes={userLikes}
                player={player}
                characters={characters}/>
            )})
        }
        </div>
    )
}