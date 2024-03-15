import { FC } from "react"
import styles from './styles.module.scss'
import { Slider } from "src/entities/director-slider"

export const SliderDirectorBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Совет директоров</h1>
      <Slider />
    </div>
  )
}
