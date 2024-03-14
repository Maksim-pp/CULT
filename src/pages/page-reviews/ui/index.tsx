import  { FC } from 'react'
import styles from './styles.module.scss'
import { ReviewsBlock } from 'src/widgets/reviews-block'

export const PageReviews:FC = () => {
  return (
    <div className={styles.block}>
      <ReviewsBlock />
    </div>
  )
}
