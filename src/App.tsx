import BG from './components/background'
import { ToastContainer } from 'react-toastify'
import Router from './routes/routes'
import { SidebarProvider } from './context/SidebarContext'
import { LoginProvider } from './context/LoginContext'
import 'react-toastify/dist/ReactToastify.min.css'
import './global.scss'

const App = () => {
  return (
    <>
      <BG />

      <LoginProvider>
        <SidebarProvider>
          <Router />
        </SidebarProvider>
      </LoginProvider>

      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
      />
    </>
  )
}

export default App
