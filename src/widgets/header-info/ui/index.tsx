import  { FC } from 'react'
import styles from './styles.module.scss'
import { InfoHeader } from 'src/entities/header/info-header'
import { Folder } from 'src/entities/header/folder'
import { InfoHeaderSecond } from 'src/entities/header/info-header-second'

export const HeaderInfo:FC = () => {
  return (
    <div className={styles.block}>
      <InfoHeader />
      <Folder />
      <InfoHeaderSecond />
    </div>
  )
}
