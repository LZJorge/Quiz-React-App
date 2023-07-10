import BG from './components/background'
import { ToastContainer } from 'react-toastify'
import Router from './routes/routes'
import { SidebarProvider } from "./context/SidebarContext"
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <>
      <BG />

      <SidebarProvider>
        <Router />
      </SidebarProvider>

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
