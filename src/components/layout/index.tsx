import { ReactNode } from "react"
import Sidebar from "../sidebar"
import Navbar from "../navbar"
import './index.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="box">
        <Sidebar />

        <div className="content">
          <Navbar/>
          { children }
        </div>
    </div>
  )
}

export default Layout