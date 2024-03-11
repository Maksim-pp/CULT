import { FC } from "react"
import styles from './styles.module.scss'
import { Logo } from "src/entities/logo"
import { Language } from "src/entities/language"
import { Contacts } from "src/entities/contacts"
import { Menu } from "src/entities/menu"
import { Chat } from "src/entities/chat"

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Language />
      <Contacts />
      <Menu />
      <Chat />
    </div>
  )
}
