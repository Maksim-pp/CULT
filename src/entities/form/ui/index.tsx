import { FC } from "react"
import { Button, Field, Icon } from "src/shared"
import styles from './styles.module.scss'

export const Form:FC = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.block__h1}>Оставьте заявку</h1>
      <form action="#" className={styles.block__form}>
        <Field className={styles.block__form__field__name} placeholder="Имя"/>
        <Field className={styles.block__form__field__phone} placeholder="Телефон"/>
        <Field className={styles.block__form__field__mail} placeholder="Email" />
        <div className={styles.block__send}>
          <label htmlFor="" className={styles.block__send__label}>
            <span className={styles.block__send__label__span}>//</span> Нажимая на кнопку «Отправить данные», вы даете согласие на обработку персональный данных
          </label>
          <Button className={styles.block__send__button}>
            Отправить данные
            <Icon icons="mail" className={styles.block__send__button__icon}/>
          </Button>
        </div>
      </form>
      
    </div>
  )
}
