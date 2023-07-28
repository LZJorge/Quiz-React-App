import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import Layout from '../../../../components/layout'
import { Input } from '../../../../components/inputs'
import Button from '../../../../components/button'
import { deleteUser, DeleteFormData } from '../../../../services/userServices'
import Loader from '../../../../components/loader'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import styles from './index.module.scss'

const DeleteUser: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No, volver',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#e52d27'
    }).then( async (result) => {
      if(result.isConfirmed) {
        const { password } = Object.fromEntries(
          new window.FormData(event.target as HTMLFormElement)
        )
    
        const formData: DeleteFormData = {
          password
        }

        await handleDelete(formData)
      }
    })
  }

  const handleDelete = async (formData: DeleteFormData) => {
    setIsLoading(true)
    
    try {
      const response = await deleteUser(formData)

      toast.success(response.message)

      navigate('/login')
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
    <Layout>
      { isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className={styles.box}>
          <h2 className={styles.title}>Eliminar cuenta</h2>
          
          <Input 
            type='password'
            name='password'
            label='Confirmar contraseña'
            iconClassName='lock'
          />

          <Button
            className="danger"
            type="submit"
            size="large"
          >
            Eliminar
          </Button>
        </form>
      )}
    </Layout>
  )
}

export default DeleteUser