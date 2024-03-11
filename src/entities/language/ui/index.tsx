import { FC } from "react"
import { Icon } from "src/shared"
import styles from './styles.module.scss'
import Select from "react-select"


export const Language: FC = () => {

    const options =[
        { value:'Ru', label: <Icon icons="flagRu" className={styles.language__select__item__icon} />},
        { value:'En', label: <Icon icons="flagEn" className={styles.language__select__item__icon} />},
        { value:'Fr', label: <Icon icons="flagFr" className={styles.language__select__item__icon} />},
    ]
    return (
        <div className={styles.language}>
            <Select 
                className={styles.language__select}
                options={options}
                defaultValue={options[0]}
                />
        </div>

    )
}
