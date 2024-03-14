import { FC } from "react"
import { Button } from "src/shared"
import styles from './styles.module.scss'
import { Media } from "src/entities/upper-block/media"
import { MediaMenu } from "src/entities/upper-block/media-menu"

export const MediaBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Медиа</h1>
      <MediaMenu />
      <Media />
      <Button className={styles.block__button}>Показать все материалы</Button>
    </div>
  )
}
