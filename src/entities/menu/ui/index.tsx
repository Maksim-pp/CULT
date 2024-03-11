import { FC } from 'react'
import styles from './styles.module.scss'
import { Icon } from 'src/shared'

export const Menu:FC = () => {
  return (
    <div className={styles.menu}>
        <ul className={styles.menu__ul}>
            <li className={styles.menu__ul__item}>
                Услуги
                <Icon icons='arrow-menu' className={styles.menu__icon}/>
                <ul className={styles.submenu}>
                    <li className={styles.submenu__item}>Услуга 1</li>
                    <li className={styles.submenu__item}>Услуга 2</li>
                </ul>
            </li>
            <li className={styles.menu__ul__item}>О холдинге</li>
            <li className={styles.menu__ul__item}>Кейсы</li>
            <li className={styles.menu__ul__item}>
                Медиа
                <Icon icons='arrow-menu' className={styles.menu__icon}/>
                <ul className={styles.submenu}>
                    <li className={styles.submenu__item}>Медиа 1</li>
                    <li className={styles.submenu__item}>Медиа 2</li>
                </ul>
            </li>
            <li className={styles.menu__ul__item}>Вакансии</li>
            <li className={styles.menu__ul__item}>Контакты</li>
        </ul>
    </div>
  )
}
