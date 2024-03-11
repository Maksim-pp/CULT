import { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'

export const Contacts:FC = () => {
  return (
    <div className={styles.contacts}>
        <Button className={styles.contacts__button}>
            <Icon icons='mail' className={styles.contacts__button__icon}/>
        </Button>
        <Button className={styles.contacts__button}>
            <Icon icons='phone' className={styles.contacts__button__icon}/>
            <p className={styles.contacts__button__text}>+7 (495) 663-65-00</p>
        </Button>
    </div>
  )
}