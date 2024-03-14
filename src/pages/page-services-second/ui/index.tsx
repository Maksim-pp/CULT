import  { FC } from 'react'
import styles from './styles.module.scss'
import { SecondFoldersBlock } from 'src/widgets/second-folders-block'

export const PageServicesSecond:FC = () => {
  return (
    <div className={styles.block}>
      <SecondFoldersBlock />
    </div>
  )
}
