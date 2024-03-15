import { FC } from 'react'
import styles from './styles.module.scss'
import { FormContacts } from 'src/entities/form-contacts'
import { Form } from 'src/entities/form/ui'

export const FormBlock:FC = () => {
  return (
    <div className={styles.block}>
        <FormContacts />
        <Form />
    </div>
  )
}
