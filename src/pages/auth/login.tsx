import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { Input } from '../../components/inputs'
import Button from '../../components/button'
import { SendLoginFormData } from '../../services/userServices'
import { LoginContext } from '../../context/LoginContext'
import { toast } from 'react-toastify'
import styles from './style.module.scss' 

interface LoginForm {
  username: FormDataEntryValue
  password: FormDataEntryValue
}

const Login: React.FC = () => {
  const { setAuth } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { username, password } = Object.fromEntries(
      new window.FormData(event.target as HTMLFormElement)
    )
    
    const formData: LoginForm = {
      username,
      password
    }

    try {
      const response = await SendLoginFormData(formData)

      toast.success(response.message)

      setAuth(true)
      navigate('/')
    } catch(error) {
      if(isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <div className={styles['form-box']}>
      <form onSubmit={handleSubmit}>
        <h1>
          Quiz Game <i className="bx bx-bulb bx-tada-hover"></i>
        </h1>
        <h2 className="title">Iniciar Sesión</h2>

        <Input 
          type="text"
          name="username"
          label="Nombre de usuario"
          iconClassName="user-circle"
          required={true}
        />

        <Input 
          type="password"
          name="password"
          label="Contraseña"
          iconClassName="lock"
          required={true}
        />

        <Button 
          value='Enviar'
          type="submit"
          className="primary"
          size='large'
        >
          Enviar
        </Button>

        <Link to="/register">Registrarse</Link>
      </form>
    </div>
  )
}

export default Login
