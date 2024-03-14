import { FC } from "react"
import styles from './styles.module.scss'
import { Logo } from "src/entities/header/logo"
import { Language } from "src/entities/header/language"
import { Contacts } from "src/entities/header/contacts"
import { Menu } from "src/entities/header/menu"
import { Chat } from "src/entities/header/chat"

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
