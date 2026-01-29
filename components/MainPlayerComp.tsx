import styles from '../styles/Evento.module.css'

export default function MainPlayer ({ mainplayer } : any) {
    return (
        <div className={styles.mainplayericon}>
            <img
            src={mainplayer.src}
            width={100}
            height={100}
            alt="" />
        </div>
    )
}