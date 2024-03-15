import { FC } from "react"
import styles from './styles.module.scss'
import { FooterBlock } from "src/widgets/footer-block"


export const Footer:FC = () => {
  return (
    <div className={styles.block}>
      <FooterBlock />
    </div>
  )
}
