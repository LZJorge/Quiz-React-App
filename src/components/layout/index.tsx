import { useContext, ReactNode } from 'react'
import { SidebarContext } from '@/context/SidebarContext'
import Sidebar from '../sidebar'
import Navbar from '../navbar'
import styles from './style.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarState } = useContext(SidebarContext)

  return (
    <div className={styles.box}>
      <Sidebar />

      <main className={`${styles.content}
          ${sidebarState === 'open' ? styles['content--aside-open'] : styles['content--aside-closed'] }
        `}>
        <Navbar />
        { children }
      </main>
    </div>
  )
}

export default Layout