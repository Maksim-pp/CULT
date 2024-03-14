import  { FC } from 'react'
import styles from './styles.module.scss'
import { Banner } from 'src/entities/body/body-info'

export const BannerBlock:FC = () => {
  return (
    <div className={styles.block}>
      <Banner />
    </div>
  )
}
