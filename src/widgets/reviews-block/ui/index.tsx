import { FC } from "react"
import { Button } from "src/shared"
import styles from './styles.module.scss'
import { Reviews } from "src/entities/body/reviews"

export const ReviewsBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Отзывы клиентов</h1>
      <Reviews />
      <Button className={styles.block__button}>Показать все отзывы</Button>
    </div>
  )
}
