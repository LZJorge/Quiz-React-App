import { useContext, ReactNode } from 'react'
import { SidebarContext } from '@/context/SidebarContext'
import { GuideContext } from '@/context/GameGuideContext'
import Sidebar from '../sidebar'
import Navbar from '../navbar'
import GameGuide from '../gameGuide'
import styles from './style.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { show } = useContext(GuideContext)
  const { sidebarState } = useContext(SidebarContext)

  return (
    <>
      <div className={styles.box}>
        <Sidebar />

        <main
          className={`${styles.content}
          ${
    sidebarState === 'open'
      ? styles['content--aside-open']
      : styles['content--aside-closed']
    }
        `}
        >
          <Navbar />
          {children}
        </main>
      </div>

      {show && <GameGuide />}
    </>
  )
}

export default Layout