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
                <div className={styles.performersinfo}>
                    <div className={styles.dj}>
                        DJ Sample
                    </div>
                    <div className={styles.drags}>
                        Drag
                    </div>
                </div>
                <div className={styles.logo}>
                    <EventoLogoComp spin={slid} />
                    <p style={{fontSize: "10px", justifyContent: "center"}}>All Rights Reserved. All the trademarks respect the issues over the movements of Endoida Floripa parties.</p>
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