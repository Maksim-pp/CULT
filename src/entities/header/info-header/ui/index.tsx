
import { FC } from 'react'
import styles from './styles.module.scss'
import Worker from 'src/app/assets/worker.png'

export const InfoHeader:FC = () => {
  return (
    <div className={styles.infoHeader}>
        <div className={styles.infoHeader__text}>
            <h1 className={styles.infoHeader__text__h1}><span className={styles.infoHeader__text__spanText}>// </span>Комплексные<br />
            <span className={styles.infoHeader__text__spanBackground}>кадровые решения</span></h1>
            <p className={styles.infoHeader__text__p}>Консалтинговая компания Nordcore & Swift Technical занимается подбором и 
            предоставлением высококвалифицированного персонала для крупнейших российских и международных компаний.</p>
        </div>
        <div className={styles.infoHeader__img}>
            <img src={Worker} className={styles.img} alt="" />
        </div>
        <div className={styles.infoHeader__info}>
            <div  className={styles.infoHeader__info__block}>
                <h1 className={styles.infoHeader__info__block__h1}>2 <span className={styles.infoHeader__info__block__span}>офиса</span></h1>
                <p className={styles.infoHeader__info__block__p}>В Москве и Южно-Сахалинске</p>
            </div>
            <div>
                <h1 className={styles.infoHeader__info__block__h1}>25 <span className={styles.infoHeader__info__block__span}>лет</span></h1>
                <p className={styles.infoHeader__info__block__p}>Помогаем компаниям</p>
            </div>
        </div>
    </div>
  )
}
