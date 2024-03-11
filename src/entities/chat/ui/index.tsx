import { FC } from "react"
import styles from './styles.module.scss'
import { Button, Icon } from "src/shared"

export const Chat:FC = () => {
  return (
    <div className={styles.chat}>
        <Button className={styles.chat__button__first}>
          Отправить резюме
        </Button>
        <Button className={styles.chat__button__second}>
          Обсудить проект
          <Icon icons="chat" className={styles.chat__button__second__icon}/>
        </Button>
    </div>
  )
}
