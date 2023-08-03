import Layout from '@/components/layout'
import { Input } from '@/components/inputs'
import Button from '@/components/button'
import styles from './style.module.scss'
import { isAxiosError } from 'axios'
import { 
  sendUpdatePasswordForm, 
  UpdatePasswordForm } from '@/services/appServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate()

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { password, newPassword, newPasswordConfirm } = Object.fromEntries(
      new window.FormData(event.target as HTMLFormElement)
    )

    const formData: UpdatePasswordForm = {
      password,
      newPassword,
      newPasswordConfirm
    }

    try {
      const response = await sendUpdatePasswordForm(formData)
      
      toast.success(response.message)

      navigate('/')
    } catch(error) {
      if(isAxiosError(error)) {
        toast.error(error.response?.data.errors[0].msg)
      }
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={handleFormSubmit} className={styles.box}>
          <h2>
            Cambiar contraseña
          </h2>

          <Input
            type='password'
            name='password'
            iconClassName='lock'
            label='Contraseña actual'
            required={true}
          />

          <Input
            type='password'
            name='newPassword'
            iconClassName='lock'
            label='Nueva contraseña'
            required={true}
          />

          <Input
            type='password'
            name='newPasswordConfirm'
            iconClassName='lock'
            label='Confirmar nueva contraseña'
            required={true}
          />

          <Button 
            type='submit'
            size='medium'
            className='primary'
          >
            Gurdar
            <i className='bx bx-save'></i>
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default UpdatePassword