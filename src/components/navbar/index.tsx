import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import Button from "../button";
import './index.css'

const Navbar: React.FC = () => {
  const { sidebarState, setSidebarState } = useContext(SidebarContext)

  const toggleSidebar = () => {
    setSidebarState(sidebarState === 'closed' ? 'open' : 'closed')
  }

  return (
    <nav>
      <div>
        <Button
          children={<i className="bx bx-menu bx-border"></i>}
          type="button"
          value=""
          onClick={ toggleSidebar }
        />
      </div>

      <div>
        <Button
          children="Guía de juego"
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