import PlayerComp from "./PlayerComp"
import styles from '../styles/Evento.module.css'

export default function PlayersComp({ players = [] } : any) {

    if(!players.length) return null

    const characters = [{name: 'boto', src:''}, {name : 'caipora', src:''}, {name : 'boitatá', src: ''}]

    return (
        <div className={styles.players}>
        { 
            players.map((player : any, index: number) => {
            return ( 
                <PlayerComp
                key={index}
                player={player}
                characters={characters}/>
            )})
        }
        </div>
    )
}