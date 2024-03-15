import { FC } from "react"
import { IFieldProps } from "src/shared/lib"


export const Field:FC<IFieldProps> = ({className, placeholder}) => {
  return (
    <input type="text" className={className} placeholder={placeholder} />
  )
}
