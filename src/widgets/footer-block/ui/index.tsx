import { FC } from 'react'
import styles from './styles.module.scss'
import { FooterLogo } from 'src/entities/footer/footer-logo'
import { FooterMenu } from 'src/entities/footer/footer-menu'
import { Foot } from 'src/entities/footer/foot'

export const FooterBlock:FC = () => {
  return (
    <div className={styles.block}>
      <FooterLogo />
      <FooterMenu />
      <Foot />
    </div>
  )
}
