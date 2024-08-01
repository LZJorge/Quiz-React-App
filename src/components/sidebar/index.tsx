import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../button'
import { getData } from '@/services/userServices'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'  
import { LoginContext } from '@/context/LoginContext'
import { SidebarContext } from '@/context/SidebarContext'
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css'    
import styles from './style.module.scss'

const Sidebar: React.FC = () => {  
  const { sidebarState, setSidebarState } = useContext(SidebarContext)
  const { setAuth } = useContext(LoginContext)
  const navigate = useNavigate()

  const closeMenuOnMobile = () => {
    if(sidebarState === 'open' && window.innerWidth <= 768) {
      setSidebarState('closed')
    }
  }

  const handleLogout = async () => {
    Swal.fire({
      title: 'Cerrar sesión',
      text: '¿Estás seguro que desear cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cerrar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await getData('/user/logout')

        if (response.code == 'success') {
          toast.success(response.message)

          localStorage.removeItem('accessToken')
          setAuth(false)
          navigate('/auth/login')
        } else {
          toast.error(response.message)
        }
      }
    })
  }

  return (
    <>
      <aside className={ sidebarState === 'closed' ? styles['aside-closed'] : styles['aside-open'] }>
        <div className={styles['aside-title']}>
          <h1 className={styles.title}>Quiz</h1>
          <i className="bx bx-bulb bx-tada-hover"></i>
        </div>

        <div className={styles['aside-buttons']}>
          <Link to={'/'} onClick={closeMenuOnMobile} className={styles['aside-button']}>
            <i className="bx bxs-dashboard"></i>
            <span>Inicio</span>
          </Link>

          <Link to={'/app'} onClick={closeMenuOnMobile} className={styles['aside-button']}>
            <i className="bx bxs-joystick"></i>
            <span>Jugar</span>
          </Link>

          <Link to={'/leaderboard'} onClick={closeMenuOnMobile} className={styles['aside-button']}>
            <i className="bx bxs-trophy"></i>
            <span>Clasificación</span>
          </Link>

          <Link to={'/settings'} onClick={closeMenuOnMobile} className={styles['aside-button']}>
            <i className="bx bxs-cog"></i>
            <span>Ajustes</span>
          </Link>
        </div>

        <div className={styles['aside-extra']}>
          <div>
            <Button
              type="button"
              size="full"
              onClick={handleLogout}
            >

              <i className="bx bx-log-out bx-border"></i>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar