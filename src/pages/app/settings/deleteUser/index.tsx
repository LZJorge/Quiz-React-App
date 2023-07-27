import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../../../components/layout'
import Button from '../../../../components/button'
import styles from './index.module.scss'
import { deleteUser } from '../../../../services/userServices'
import Loader from '../../../../components/loader'
import { toast } from 'react-toastify'

const DeleteUser: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleClick = async () => {
    setIsLoading(true)
    
    try {
      const response = await deleteUser()

      if (response.code === 'success') {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }

      navigate('/login')
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      { isLoading ? (
        <Loader />
      ) : (
        <div className={styles.box}>
        <h2 className={styles.title}>Eliminar cuenta</h2>
        <div>
          <h3 className={styles.subtitle}>¿Estás seguro?</h3>
          <p className={styles.text}>Esta acción no se puede deshacer</p>

          <Button
            text="Eliminar"
            className="danger"
            type="button"
            size="large"
            onClick={handleClick}
          />
        </div>
      </div>
      )}
    </Layout>
  )
}

export default DeleteUser