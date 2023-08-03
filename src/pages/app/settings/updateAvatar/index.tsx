import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAvatars from '@/hooks/useAvatars'
import { updateAvatar } from '@/services/userServices'
import Layout from '@/components/layout'
import Loader from '@/components/loader'
import Button from '@/components/button'
import { toast } from 'react-toastify'
import styles from './style.module.scss'

const UpdateAvatar: React.FC = () => {
  const navigate = useNavigate()
  const { isLoading, setIsLoading, avatars } = useAvatars()
  const [selectedAvatar, setSelectedAvatar] = useState<string>('')

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAvatar(event.target.value)
  }

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(!isLoading) {
      try {
        setIsLoading(true)
        const response = await updateAvatar(selectedAvatar)
  
        toast.success(response.message)
        
        navigate('/')
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Layout>
      { isLoading ? (
        <Loader />
      ) : (
        <>
          { avatars && (
            <div className={styles.container}>
              <form onSubmit={handleSubmitForm} className={styles.box}>
                <h2>Selecciona tu avatar</h2>

                <div className={styles['avatar-container']}>
                  { avatars.map((avatar) => (
                    <div key={avatar}>
                      <label>
                        <input
                          type="radio"
                          value={avatar}
                          checked={selectedAvatar === avatar}
                          onChange={handleAvatarChange}
                          className={styles.check}
                        />

                        <img src={`${import.meta.env.VITE_API_URL}${avatar}`} alt="Avatar" />
                      </label>
                    </div>
                  ))}
                </div>

                <Button 
                  type="submit"
                  size="large"
                  className="primary"
                >
                  Gurdar
                  <i className='bx bx-save'></i>
                </Button>
              </form>
          </div>
          )}
        </>
      )}
    </Layout>
  )
}

export default UpdateAvatar