import  { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'

export const FooterMenu:FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__item}>
        <div className={styles.block__item__head}>Swift Technical</div>
        <div className={styles.block__item__li}>Подбор персонала</div>
        <div className={styles.block__item__li}>Временный персонал</div>
        <div className={styles.block__item__li}>Консультационные услуги</div>
        <div className={styles.block__item__li}>Подбор персонала</div>
        <div className={styles.block__item__li}>Временный персонал</div>
        <div className={styles.block__item__li}>Консультационные услуги</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__item__head}>Nordcore</div>
        <div className={styles.block__item__li}>Обучение и оценка</div>
        <div className={styles.block__item__li}>Консультационные услуги</div>
        <div className={styles.block__item__li}>Обучение и оценка</div>
        <div className={styles.block__item__li}>Консультационные услуги</div>
        <div className={styles.block__item__li}>Обучение и оценка</div>
        <div className={styles.block__item__li}>Консультационные услуги</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__item__head}>Кейсы</div>
        <div className={styles.block__item__head}>Медиа</div>
        <div className={styles.block__item__li}>Статьи</div>
        <div className={styles.block__item__li}>Гайды</div>
        <div className={styles.block__item__li}>Новости</div>
        <div className={styles.block__item__li}>Мероприятия</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__item__head}>О холдинге</div>
        <div className={styles.block__item__head}>Вакансии</div>
        <div className={styles.block__item__head}>Контакты</div>
      </div>
      <div className={styles.block__item}>
        <div className={styles.block__item__li}>Почта для резюме</div>
        <div className={styles.block__item__head}>Rabota@SwiftTechnical.ru</div>
        <div className={styles.block__item__buttons}>
          <Button className={styles.block__item__buttons__btn}>
            <Icon icons='telegram-footer' className={styles.block__item__buttons__btn__icon}/>
          </Button>
          <Button className={styles.block__item__buttons__btn}>
            <Icon icons='dzen-footer' className={styles.block__item__buttons__btn__icon}/>
          </Button>
          <Button className={styles.block__item__buttons__btn}>
            <Icon icons='vk-footer' className={styles.block__item__buttons__btn__icon}/>
          </Button>
          <Button className={styles.block__item__buttons__btn}>
            <Icon icons='in-footer' className={styles.block__item__buttons__btn__icon}/>
          </Button>
          <Button className={styles.block__item__buttons__btn}>
            <Icon icons='hh-footer' className={styles.block__item__buttons__btn__icon}/>
          </Button>
        </div>
      </div>
    </div>
  )
}
