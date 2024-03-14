import  { FC } from 'react'
import styles from './styles.module.scss'

export const MediaMenu:FC = () => {
  return (
    <ul className={styles.ul}>
        <li className={styles.ul__item}>Последние материалы</li>
        <li className={styles.ul__item}>Статьи</li>
        <li className={styles.ul__item}>Гайды</li>
        <li className={styles.ul__item}>Новости</li>
    </ul>
  )
}
