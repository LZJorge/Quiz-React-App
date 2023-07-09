import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import Button from "../buttons";
import './index.css'

const Navbar: React.FC = () => {
  const { sidebarState, setSidebarState } = useContext(SidebarContext)

  const toggleSidebar = () => {
    if(sidebarState == 'open') {
      setSidebarState('close')
    } else {
      setSidebarState('open')
    }
  }

  return (
    <>
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
    </>
  )
}

export default Navbar