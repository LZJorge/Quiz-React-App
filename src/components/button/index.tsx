import './index.css'

interface Props {
	children: string | any
	type: 'button' | 'submit'
	className?: string
  size?: string
  value?: string
	onClick?: (value: string | undefined) => void
}

const Button: React.FC<Props> = ({ 
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
      { children }
    </button>
  )
}

export default Button