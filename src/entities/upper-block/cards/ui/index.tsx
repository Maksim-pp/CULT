import { FC } from "react"
import styles from './styles.module.scss'
import { cards } from ".."
import Spacer from 'src/app/assets/spacer.png'

export const Cards:FC = () => {
  return (
    <div className={styles.block}>
        {
            cards.map(el =>(
                <div key={el.id} className={styles.cards}>
                    <h3 className={styles.cards__h3}>{el.head}</h3>
                    <img src={Spacer} alt="" className={styles.cards__img}/>
                    <p className={styles.cards__p}>{el.text}</p>
                </div>
            ))
        }
    </div>
  )
}
