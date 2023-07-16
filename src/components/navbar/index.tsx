import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import Button from "../button";
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
          children={<i className="bx bx-menu bx-border"></i>}
          type="button"
          value=""
          onClick={ toggleSidebar }
          size="full"
        />
      </div>

      <div>
        <Button
          text="Guía de juego"
          children={<i className="bx bxs-help-circle"></i>}
          type="button"
          value=""
          className="secondary"
          size="medium"
        />
      </div>
    </nav>
  )
}

export default Navbar