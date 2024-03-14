import { FC } from "react"
import { folder } from ".."
import { Bookmark, Button, Icon } from "src/shared"
import styles from './styles.module.scss'

export const SecondFolders:FC = () => {
  return (
    <div className={styles.block}>
        {
            folder.map(el =>(
                <div key={el.id} className={styles.folder}>
                    <Bookmark className={styles.folder__bookmark}/>
                    <div className={styles.folder__text}>
                        <h1 className={styles.folder__text__h1}>{el.head}</h1>
                        <Button className={styles.folder__text__button}>
                            <Icon icons="arrow" className={styles.folder__text__button__icon}/>
                        </Button>
                        
                        <p className={styles.folder__text__p}>{el.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
