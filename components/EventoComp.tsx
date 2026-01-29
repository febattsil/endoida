import styles from '../styles/Evento.module.css'
import { useState } from 'react';
import PlayersComp from './PlayersComp';
import MainPlayersComp from './MainPlayerComp';
import EventoInfo from './EventoInfoComp';
import AppsComp from './AppsComp';
import SponsorsComp from './SponsorsComp';
import EventoLogoComp from './EventoLogoComp';

export default function EventoComp({user, evento, characters} : {user:any[], evento: any, characters: any}){

    const [slid, setSlid] = useState(false);


    return (
        <div style={{height: "100%", position: "relative"}}>

            <div className={`${styles.performers} ${ slid ? styles.active : ""}`}>

                <EventoLogoComp />

                <div>
                    {evento.dj}
                </div>
                <div>
                    {evento.drag}
                </div>
            </div>

            <div className={styles.eventoperspective}>

                <button className={styles.btncoverflow} onClick={() => setSlid(!slid)} />

                <div className={`${styles.evento} ${slid ? styles.issliding : ''}`}>

                    <EventoInfo
                    eventoinfo={evento.info} />

                    <MainPlayersComp 
                    mainplayers={evento.mainplayers}/>

                    <PlayersComp
                    userLikes={user[evento].userLikes}
                    players={evento.players}
                    characters={characters}/>

                    <AppsComp
                    apps={evento.apps} />

                    <SponsorsComp
                    sponsors={evento.sponsors}/>

                </div>
            </div>

        </div>


    )
}