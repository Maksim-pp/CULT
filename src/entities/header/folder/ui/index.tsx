import { FC } from 'react'
import { Bookmark, Button, Icon } from 'src/shared'
import styles from './styles.module.scss'

export const Folder:FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__folder}>
        <Bookmark className={styles.bookmark__first}/>
        <div className={styles.block__folder__info}>
          <div className={styles.block__folder__info__text}>
            <h1 className={styles.block__folder__info__text__h1}>Swift Technical</h1>
            <p className={styles.block__folder__info__text__p}>Подбор, временный персонал,<br /> технико-консультационные услуги</p>
          </div>
          <Button className={styles.block__folder__info__button}>
            <Icon icons='arrow' className={styles.icon}/>
          </Button>
          <div className={styles.block__folder__info__tag__first}>
            Подбор персонала // Временный персонал
          </div>
        </div>
      </div>
      <div className={styles.block__folder}>
        <Bookmark className={styles.bookmark__second}/>
        <div className={styles.block__folder__info}>
          <div className={styles.block__folder__info__text}>
            <h1 className={styles.block__folder__info__text__h1}>Nordcore</h1>
            <p className={styles.block__folder__info__text__p}>Карьерное консультирование B2C и <br />корпоративное обучение B2B</p>
          </div>
          <Button className={styles.block__folder__info__button}>
            <Icon icons='arrow' className={styles.icon}/>
          </Button>
          <div className={styles.block__folder__info__tag__second}>
            Обучение и оценка // Консультационные услуги
          </div>
        </div>
      </div>
    </div>
  )
}
