import { FC } from 'react'
import styles from './styles.module.scss'
import { Icon } from 'src/shared'

export const Logo:FC = () => {
  return (
    <div className={styles.logo}>
        <ul className={styles.logo__ul}>
            <li className={styles.logo__ul__item}>
                <a href="#" className={styles.logo__ul__item__a}>
                    <Icon icons='logo' className={styles.logo__icon}/>
                </a>
            </li>
            <li className={styles.logo__ul__item}>
                <a href="#" className={styles.logo__ul__item__a}>
                    <span className={styles.logo__ul__item__a__blue}>Холдинг</span>
                </a>
            </li>
            <li className={styles.logo__ul__item}>
                <a href="#" className={styles.logo__ul__item__a}>Nordcore</a>
            </li>
            <li className={styles.logo__ul__item}>
                <a href="#" className={styles.logo__ul__item__a}>Swift Technical</a>
            </li>
        </ul>
    </div>
  )
}