import { FC } from "react"
import styles from './styles.module.scss'
import { BannerBlock } from "src/widgets/banner-block"


export const PageBanner:FC = () => {
  return (
    <div className={styles.block}>
      <BannerBlock />
    </div>
  )
}
