import  { FC } from 'react'
import { FirstFoldersBlock } from 'src/widgets/first-folders-block'
import styles from './styles.module.scss'

export const PageServicesFirst:FC = () => {
  return (
    <div className={styles.block}>
      <FirstFoldersBlock />
    </div>
  )
}
