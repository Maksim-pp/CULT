import  { FC } from 'react'
import styles from './styles.module.scss'
import LogoSwift from 'src/app/assets/logo_swift.png'
import LogoNordcore from 'src/app/assets/logo_nordcore.png'

export const FooterLogo:FC = () => {
  return (
    <div className={styles.block}>
        <img src={LogoSwift} alt="" className={styles.block__logo}/>
        <img src={LogoNordcore} alt="" className={styles.block__logo}/>
        <div className={styles.block__location}>
            <h1 className={styles.block__location__h1}>Москва</h1>
            <p className={styles.block__location__p}>4й Добрынинский переулок, дом 8, офис С03-01</p>
        </div>
        <div className={styles.block__contacts}>
            <p className={styles.block__contacts__mail}>Contact@SwiftTechnical.ru</p>
            <h1 className={styles.block__contacts__phone}>+7 (495) 663-65-00</h1>
        </div>
    </div>
  )
}
