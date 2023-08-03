import { useContext } from 'react'
import { SidebarContext } from '@/context/SidebarContext'
import Button from '../button'
import style from './style.module.scss'

const Navbar: React.FC = () => {
  const { sidebarState, setSidebarState } = useContext(SidebarContext)

  const toggleSidebar = () => {
    setSidebarState(sidebarState === 'closed' ? 'open' : 'closed')
  }

  return (
    <nav className={style.nav}>
      <div>
        <Button
          type="button"
          value=""
          onClick={ toggleSidebar }
          size="full">

          <i className="bx bx-menu bx-border"></i>
        </Button>
      </div>

      <div>
        <Button
          type="button"
          value=""
          className="secondary"
          size="medium"
        >
          Guía de juego
          <i className="bx bxs-help-circle"></i>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar