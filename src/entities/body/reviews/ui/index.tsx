import { FC } from "react"
import styles from './styles.module.scss'
import { cards } from ".."
import Worker from 'src/app/assets/worker3.png'

export const Reviews:FC = () => {
  return (
    <div className={styles.block}>
        {
            cards.map(el =>(
                <div key={el.id} className={styles.cards}>
                    <h3 className={styles.cards__h3}>{el.head}</h3>
                    <img src={Worker} alt="" className={styles.cards__img}/>
                    <p className={styles.cards__p}>
                      {el.text}<br/> <br/>
                      <span className={styles.cards__name}>{el.name}</span><br />
                      <span className={styles.cards__post}>{el.post}</span>
                    </p>
                </div>
            ))
        }
    </div>
  )
}
