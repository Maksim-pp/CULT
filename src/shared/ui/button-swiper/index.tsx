import { FC } from 'react'
import styles from './styles.module.scss'
import { useSwiper } from 'swiper/react'
import { Icon } from '..'


export const ButtonSwiper:FC = () => {
    const swiper = useSwiper()
  return (
    <div className={styles.swiper__button}>
        <button className={styles.swiper__button__prev} onClick={() => swiper.slidePrev()}>
            <Icon icons='prev' />
        </button>
        <button className={styles.swiper__button__next} onClick={() => swiper.slideNext()}>
            <Icon icons='next' />
        </button>
    </div>
  )
}
