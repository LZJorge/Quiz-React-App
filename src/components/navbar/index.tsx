import { useContext } from 'react'
import { SidebarContext } from '@/context/SidebarContext'
import { GuideContext } from '@/context/GameGuideContext'
import Button from '../button'
import styles from './style.module.scss'

const Navbar: React.FC = () => {
  const { setShow } = useContext(GuideContext)
  const { sidebarState, setSidebarState } = useContext(SidebarContext)

  const toggleSidebar = () => {
    setSidebarState(sidebarState === 'closed' ? 'open' : 'closed')
  }

  return (
    <nav className={styles.nav}>
      <div className={styles['nav-left']}>
        <Button type="button" onClick={toggleSidebar} size="full">
          <i className="bx bx-menu bx-border"></i>
        </Button>
      </div>

      <div>
        <Button
          type="button"
          className="secondary"
          size="full"
          padding="p-regular"
          onClick={() => setShow(true)}
        >
          <span className={styles['guide-button-text']}> Guía de juego </span>
          <i className="bx bxs-help-circle"></i>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar