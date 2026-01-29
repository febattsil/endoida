import styles from '../styles/Evento.module.css'
import AppComp from './AppComp'

export default function AppsComp({ apps } : any) {
    return (
        <div className={styles.apps}>
            {
                apps.map((app : any) => {
                    return <AppComp app={app}/>
                })
            }      
        </div>
    )
}