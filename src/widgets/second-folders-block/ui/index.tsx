import { FC } from "react"
import { Button } from "src/shared"
import styles from './styles.module.scss'
import { SecondFolders } from "src/entities/upper-block/second-folders"

export const SecondFoldersBlock:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Услуги Swift Technical</h1>
      <SecondFolders />
      <Button className={styles.block__button}>Показать все услуги</Button>
    </div>
  )
}
