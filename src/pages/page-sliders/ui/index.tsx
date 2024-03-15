import  { FC } from 'react'
import styles from './styles.module.scss'
import { SliderDirectorBlock } from 'src/widgets/slider-director-block'
import { SliderTeamBlock } from 'src/widgets/slider-team-block'

export const PageSliders:FC = () => {
  return (
    <div className={styles.block}>
      <SliderDirectorBlock />
      <SliderTeamBlock />
    </div>
  )
}
