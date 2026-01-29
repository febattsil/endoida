import { useEffect, useState } from 'react'
import styles from '../styles/Evento.module.css'

export default function ReactionBtnComp({ player } : any) {

    const[enable, setEnable] = useState<Boolean>()

    return (
        <div className={styles.reactionsbtns}>
            {
                player.characters.map((character : any) => {
                    player.likes.map((like : any) => {
                        <div key={character.id}
                        className={styles.reactionbtn}>
                        <div style={{
                        position: "absolute",
                        top: "0",
                        right: "110%",
                        height: "5px",
                        width: "5px",
                        borderRadius: "50%",
                        background: "red",
                        padding: "2.5px",
                        color: "white"}}>
                            {like.senders.length}
                        </div> 
                        <img 
                        key={character.id}
                        width={100}
                        height={100}
                        src={player.character
                        ? character.empty 
                        : character.full} />
                        </div>
                    })
                })
            }
        </div>
    )
}