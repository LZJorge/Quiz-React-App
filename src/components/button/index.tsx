import styles from './style.module.scss'

interface Props {
  text?: string
	children?: string | any
	type: 'button' | 'submit'
  size: string
	className?: string
  value?: string
	onClick?: (value: string | undefined) => void
}

const Button: React.FC<Props> = ({ 
  text,
  children, 
  type, 
  className, 
  size, 
  value,
  onClick 
}) => {
  const dynamicClass = className ? `button-${className}` : ''
  
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[dynamicClass]} ${styles[size]}`}
      value={value}
      onClick={() => onClick?.(value)}
    >
      { text }
      { children }
    </button>
  )
}

export default Button