import { FC } from 'react'
import styles from './styles.module.scss'
import { Button, Icon } from 'src/shared'

export const InfoHeaderSecond:FC = () => {
    return (
        <div className={styles.infoHeader}>
        <div className={styles.infoHeader__text}>
            <h1 className={styles.infoHeader__text__h1}><span className={styles.infoHeader__text__spanText}>// </span>Формируем команды<br />
            <span className={styles.infoHeader__text__spanBackground}>подбираем специалистов</span></h1>
            <p className={styles.infoHeader__text__p}>Собираем эффективные команды и помогаем ими управлять.<br /> В любых формах занятости, для решения любых задач.</p>
        </div>
        <Button className={styles.button}>
            Подробнее о холдинге
            <Icon icons='file' className={styles.icon}/>
        </Button>
        <div className={styles.infoHeader__info}>
            <div  className={styles.infoHeader__info__block}>
                <h1 className={styles.infoHeader__info__block__h1}>78 <span className={styles.infoHeader__info__block__span}>%</span></h1>
                <p className={styles.infoHeader__info__block__p}>Высокий процент закрытия вакансий</p>
            </div>
            <div>
                <h1 className={styles.infoHeader__info__block__h1}>20-40 <span className={styles.infoHeader__info__block__span}>дней</span></h1>
                <p className={styles.infoHeader__info__block__p}>Сотрудников подобрали<br /> за 25 лет</p>
            </div>
            <div  className={styles.infoHeader__info__block}>
                <h1 className={styles.infoHeader__info__block__h1}>10 000</h1>
                <p className={styles.infoHeader__info__block__p}>В Москве и Южно-Сахалинске</p>
            </div>
            <div>
                <h1 className={styles.infoHeader__info__block__h1}>300 000</h1>
                <p className={styles.infoHeader__info__block__p}>Специалистов<br /> в собственной базе</p>
            </div>
        </div>
    </div>
    )
}
