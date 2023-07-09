import { ReactNode } from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import { SidebarProvider } from "../../context/SidebarContext";
import './index.css'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="box">
      <SidebarProvider>
        <Sidebar />

        <div className="content">
          <Navbar/>

          { children }
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout