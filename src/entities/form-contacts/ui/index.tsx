import  { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'

export const FormContacts: FC = () => {
  return (
    <div className={styles.block}>
        <h1 className={styles.block__h1}>
            Консультация специалиста
        </h1>
        <p className={styles.block__p}>Напишите нам, позвоните или оставьте заявку. Выбирайте наиболее удобный для вас способ коммуникации!</p>
        <div className={styles.block__button}>
            <Button className={styles.block__button__telegram}>
                Telegram
                <Icon icons='telegram' className={styles.block__button__telegram__icon}/>
            </Button>
            <Button className={styles.block__button__whatsapp}>
                Whatsapp
                <Icon icons='whatsapp' className={styles.block__button__whatsapp__icon}/>
            </Button>
            <Button className={styles.block__button__vk}>
                Вконтакте
                <Icon icons='vk' className={styles.block__button__vk__icon}/>
            </Button>
            <Button className={styles.block__button__mail}>
                Почта
                <Icon icons='mail' className={styles.block__button__mail__icon}/>
            </Button>
        </div>
    </div>
  )
}
