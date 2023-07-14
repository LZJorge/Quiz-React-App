import './index.css'

interface Props {
  text?: string
	children?: string | any
	type: 'button' | 'submit'
	className?: string
  size?: string
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
  return (
    <button
      type={type}
      className={`button button-${className} ${size}`}
      value={value}
      onClick={() => onClick?.(value)}
    >
      { text }
      { children }
    </button>
  )
}

export default Button