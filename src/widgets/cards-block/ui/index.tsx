import { FC } from "react"
import { Button } from "src/shared"
import styles from './styles.module.scss'
import { Cards } from "src/entities/upper-block/cards"

export const CaseBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Кейсы</h1>
      <Cards />
      <Button className={styles.block__button}>Показать все кейсы</Button>
    </div>
  )
}
