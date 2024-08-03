import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { Input } from '@/components/inputs'
import Button from '@/components/button'
import { SendLoginFormData,UserForm } from '@/services/userServices'
import { LoginContext } from '@/context/LoginContext'
import { toast } from 'react-toastify'
import styles from './style.module.scss' 

const Login: React.FC = () => {
  const { setAuth } = useContext(LoginContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(isLoading) return

    setIsLoading(true)

    const { username, password } = Object.fromEntries(
      new window.FormData(event.target as HTMLFormElement)
    )
    
    const formData: UserForm = {
      username,
      password
    }

    try {
      const response = await SendLoginFormData(formData)

      localStorage.removeItem("accessToken")
      localStorage.setItem("accessToken", response.token)

      toast.success(response.message)
      
      setTimeout(() => {
        setAuth(true);
        navigate('/')
        window.location.reload()
      }, 1200)
    } catch(error) {
      if(isAxiosError(error)) {
        if(error.response?.data.errors) {
          toast.error(error.response.data.errors[0].msg)
        } else {
          toast.error(error.response?.data.message)
        }
      }
    } finally {
      setIsLoading(false)
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
          type='text'
          name='username'
          label='Nombre de usuario'
          iconClassName='user-circle'
          required={true}
        />

        <Input 
          type='password'
          name='password'
          label='Contraseña'
          iconClassName='lock'
          required={true}
        />

        <Button 
          value='Enviar'
          type={ isLoading ? ('button') : ('submit')}
          className='primary'
          size='large'
        >
          { isLoading ? (<i className='bx bx-loader-alt bx-spin'></i>) : ('Enviar')}
        </Button>

        <Link to="/auth/register">Registrarse</Link>
      </form>
    </div>
  )
}

export default Login
