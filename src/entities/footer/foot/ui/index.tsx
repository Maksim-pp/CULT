import { FC } from 'react'
import styles from './styles.module.scss'

export const Foot: FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__item}>
        <div className={styles.block__item__text}>Политика конфиденциальности</div>
        <div className={styles.block__item__text}>Сделано в  CULT
        </div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__item__text}>Сайт носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи<br />
          437(2) Гражданского кодекса Российской Федерации. Условия и стоимость предоставления услуг необходимо уточнять у менеджера.
          </div>
        <div className={styles.block__item__text}>1997–2023 © Nordcore & Swift Technical</div>
      </div>
    </div>
  )
}
