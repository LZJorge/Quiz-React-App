import { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
	children?: ReactNode
	type: 'button' | 'submit'
  size: string
	className?: string
  value?: string
  padding?: 'p-regular'
	onClick?: (value: string | undefined) => void
}

const Button: React.FC<Props> = ({ 
  children, 
  type, 
  className, 
  size, 
  value,
  padding = '',
  onClick 
}) => {
  const dynamicClass = className ? `button-${className}` : ''
  
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[dynamicClass]} ${styles[size]} ${styles[padding]}`}
      value={value}
      onClick={() => onClick?.(value)}
    >
      { children }
    </button>
  )
}

export default Button