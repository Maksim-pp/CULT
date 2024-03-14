import  { FC } from 'react'
import styles from './styles.module.scss'
import { CaseBlock } from 'src/widgets/cards-block'

export const PageCase:FC = () => {
  return (
    <div className={styles.block}>
      <CaseBlock />
    </div>
  )
}
