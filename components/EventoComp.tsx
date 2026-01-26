import styles from '../styles/Evento.module.css'

export default function EventoComp({ isSelected } : any){

    return (
        <div className={styles.evento}>
                    <div className={styles.eventoinfo}>
                        <div className={styles.eventoTitle}>Titulo</div>
                        <div className={styles.details}>
                            <div className={styles.description}>
                                    aqui fica o info
                            </div>
                            <div className={styles.location}>
                                aqui fica o location
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainplayers}>
                        <div className={styles.mainplayericon}/>
                        <div className={styles.mainplayericon}/>
                        <div className={styles.mainplayericon}/>
                        <div className={styles.mainplayericon}/>
                        <div className={styles.mainplayericon}/>
                    </div>
                    <div className={styles.players}>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                        <div className={styles.player}>
                            <div className={styles.nickname}>
                                @febattsil
                            </div>
                            <div className={styles.reactionsbtns}>
                                <div className={styles.reactionbtn} />
                                <div className={styles.reactionbtn} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.apps}>
                        <div className={styles.app}></div>
                        <div className={styles.app}></div>
                        <div className={styles.app}></div>
                        <div className={styles.app}></div>
                    </div>
                    <div className={styles.sponsors}>
                        <div className={styles.sponsor}/>
                        <div className={styles.sponsor}/>
                        <div className={styles.sponsor}/>
                        <div className={styles.sponsor}/>
                    </div>
                </div>
    )
}