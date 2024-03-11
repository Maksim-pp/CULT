import { FC } from "react"
import { IButtonProps } from "../../lib"

export const Button:FC<IButtonProps> = ({children, className}) => {
  return (
    <button className={className}>{children}</button>
  )
}
