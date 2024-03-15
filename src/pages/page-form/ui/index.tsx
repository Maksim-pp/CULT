import { FC } from "react"
import styles from './styles.module.scss'
import { FormBlock } from "src/widgets/form-block"


export const PageForm:FC = () => {
  return (
    <div className={styles.block}>
      <FormBlock />
    </div>
  )
}
