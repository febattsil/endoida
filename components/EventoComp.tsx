import styles from '../styles/Evento.module.css'
import { useState } from 'react';
import PlayersComp from './PlayersComp';
import MainPlayersComp from './MainPlayersComp';
import EventoInfo from './EventoInfoComp';
import AppsComp from './AppsComp';
import SponsorsComp from './SponsorsComp';
import EventoLogoComp from './EventoLogoComp';

export default function EventoComp({evento} : {evento: any}){

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
                    name={evento.name}
                    description={evento.description}
                    locationlap={evento.locationlap}
                    />

                    <MainPlayersComp 
                    mainplayers={evento.players}
                    />

                    <PlayersComp
                    players={evento.players}
                    />

                    <AppsComp
                    apps={evento.apps} />

                    <SponsorsComp
                    sponsors={evento.sponsors}/>

                </div>
            </div>

        </div>


    )
}