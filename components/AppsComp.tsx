import styles from '../styles/Evento.module.css'
import AppComp from './AppComp'

export default function AppsComp({ apps = [] } : any) {

    if(!apps.length) return null

    return (
        <div className={styles.apps}>
            {
                apps.map((app : any, index: number) => {
                    return <AppComp 
                    key={index}
                    app={app}/>
                })
            }      
        </div>
    )
}