import { FC } from "react"
import styles from './styles.module.scss'
import { Header } from "src/widgets/header"


export const Head:FC = () => {
  return (
    <div className={styles.block}>
      <Header />
    </div>
  )
}
