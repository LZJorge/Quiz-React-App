import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { Input } from '@/components/inputs'
import Button from '@/components/button'
import { SendRegisterFormData, UserRegisterForm } from '@/services/userServices'
import { toast } from 'react-toastify'
import styles from './style.module.scss'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(isLoading) return
    setIsLoading(true)

    const { username, password, passwordConfirm } = Object.fromEntries(
      new window.FormData(event.target as HTMLFormElement)
    )
    
    const formData: UserRegisterForm = {
      username,
      password,
      passwordConfirm
    }

    try {
      const response = await SendRegisterFormData(formData)

      toast.success(response.message)

      navigate('/auth/login')
    } catch (error) {
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
        <h2 className="title">Registrarse</h2>

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

        <Input 
          type="password"
          name="passwordConfirm"
          label="Confirmar contraseña"
          iconClassName="lock"
          required={true}
        />

        <Button 
          value="Enviar"
          type={ isLoading ? ('button') : ('submit')}
          className="primary"
          size='large'
        >
          { isLoading ? (<i className='bx bx-loader-alt bx-spin'></i>) : ('Enviar')}
        </Button>

        <Link to="/auth/login">Iniciar sesión</Link>
      </form>
    </div>
  )
}

export default Register