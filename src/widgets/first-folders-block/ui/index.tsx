import { FC } from "react"
import { FirstFolders } from "src/entities/upper-block/first-folders"
import { Button } from "src/shared"
import styles from './styles.module.scss'

export const FirstFoldersBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Услуги Nordcore</h1>
      <FirstFolders />
      <Button className={styles.block__button}>Показать все услуги</Button>
    </div>
  )
}
