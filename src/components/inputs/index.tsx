import { ChangeEvent } from 'react'
import styles from './style.module.scss'

interface Props {
	type: string
  name: string
	placeholder?: string
	required?: boolean
	iconClassName: string
  label: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({ type, name, placeholder, required, iconClassName, label, onChange }) => {
  return (
    <div className={styles['input-box']}>
      <input
        type={type}
        name={name}
        placeholder={placeholder || ''}
        required={required}
        onChange={onChange}
      />
      
      <label 
        htmlFor={name} 
        className="label">
        {label}
      </label>

      <span className='input-icon'>
        <i className={`bx bx-${iconClassName}`}></i>
      </span>
    </div>
  )
}