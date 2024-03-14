import { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'
import Worker from 'src/app/assets/worker2.png'

export const Banner:FC = () => {
  return (
    <div className={styles.block}>
        <div className={styles.block__text}>
            <h1 className={styles.block__text__h1}>
                <span className={styles.block__text__h1__span}>// </span>
                Всё получится: новая профессия и новая жизнь
            </h1>
            <p className={styles.block__text__p}>С вами всегда наставники, ревьюеры и такие же как вы студенты. 
            Реальные проекты и целая платформа с упражнениями помимо теории. Практикум помогает прийти к цели быстрее. Главное — идти!</p>
            <div className={styles.block__text__buttons}>
                <Button className={styles.block__text__buttons__chat}>
                    Обсудить проект
                    <Icon icons='chat' className={styles.block__text__buttons__chat__icon}/>
                </Button>
                <Button className={styles.block__text__buttons__mail}>
                    Отправить резюме
                    <Icon icons='mail' className={styles.block__text__buttons__mail__icon}/>
                </Button>
            </div>
        </div>
        <div className={styles.block__image}>
            <img src={Worker} alt="" className={styles.img}/>
        </div>
    </div>
  )
}
