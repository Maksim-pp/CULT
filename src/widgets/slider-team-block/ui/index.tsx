import { FC } from "react"
import styles from './styles.module.scss'
import { Slider } from "src/entities/team-slider"

export const SliderTeamBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Команда холдинга</h1>
      <Slider />
    </div>
  )
}
