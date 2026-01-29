import { useEffect, useState } from 'react'
import styles from '../styles/Evento.module.css'

export default function ReactionBtnComp({userLikes, player, characters} : any) {

    const[enable, setEnable] = useState<Boolean>()

    return (
        <div className={styles.reactionsbtns}>
            {
                characters.map((character : any) => {
                    <div key={character.id}
                        className={styles.reactionbtn}>
                        <img  key={character.id}
                                width={100}
                                height={100}
                                src={userLikes[player][characters.character] ? character.empty : character.full} />
                    </div>
                })
            }
        </div>
    )
}