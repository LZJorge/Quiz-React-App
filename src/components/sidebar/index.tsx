import { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import { useNavigate, Link } from "react-router-dom"
import Button from "../button"
import { getData } from "../../services/userServices"
import Swal from "sweetalert2"
import { toast } from "react-toastify"  
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css'    
import './index.css'

const Sidebar: React.FC = () => {  
  const { sidebarState } = useContext(SidebarContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    Swal.fire({
      title: 'Cerrar sesión',
      text: '¿Estás seguro que desear cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cerrar'
    }).then( async (result) => {
      if(result.isConfirmed) {
        const response = await getData('/user/logout')

        if (response.code == 'success') {
          toast.success(response.message)

          navigate('/login')
        } else {
          toast.error(response.message)
        }
      }
    })
  }

  return (
    <>
      <aside className={ sidebarState === 'closed' ? 'aside-closed' : 'aside-open' }>
        <div className="aside-title">
          <h1 className="title">Quiz</h1>
          <i className="bx bx-bulb bx-tada-hover"></i>
        </div>

        <div className="aside-buttons">
          <Link to={'/'} className="aside-button">
            <i className="bx bxs-dashboard"></i>
            <span>Inicio</span>
          </Link>

          <Link to={'/app'} className="aside-button">
            <i className="bx bxs-joystick"></i>
            <span>Jugar</span>
          </Link>

          <Link to={'/leaderboard'} className="aside-button">
            <i className="bx bxs-trophy"></i>
            <span>Clasificación</span>
          </Link>

          <Link to={'#'} className="aside-button">
            <i className="bx bxs-cog"></i>
            <span>Ajustes</span>
          </Link>
        </div>

        <div className="aside-extra">
          <div>
            <Button
              children={<i className="bx bx-log-out bx-border"></i>}
              type="button"
              value=""
              size="full"
              onClick={handleLogout}
            />
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar