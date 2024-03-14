import { FC } from "react"
import styles from './styles.module.scss'
import { Header } from "src/widgets/header"
import { HeaderInfo } from "src/widgets/header-info"


export const Head:FC = () => {
  return (
    <div className={styles.block}>
      <Header />
      <HeaderInfo />
    </div>
  )
}
