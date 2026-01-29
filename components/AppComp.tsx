import styles from '../styles/Evento.module.css'
import { useRouter } from 'next/router'

export default function AppComp({ app } : any){

    const router = useRouter()

    return <button
            className={styles.app}
            onClick={() => router.push("/app.name")}>
                {app.name}
            </button>
}