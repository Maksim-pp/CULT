import  { FC } from 'react'
import styles from './styles.module.scss'
import { MediaBlock } from 'src/widgets/media-block'

export const PageMedia:FC = () => {
  return (
    <div className={styles.block}>
      <MediaBlock />
    </div>
  )
}
