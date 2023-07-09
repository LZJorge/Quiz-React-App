import BG from './components/background'
import { ToastContainer } from 'react-toastify'
import Router from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {

  return (
    <>
      <BG />
      
      <Router />

      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
