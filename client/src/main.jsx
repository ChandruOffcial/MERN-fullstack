
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Toaster } from "react-hot-toast"
import { UserContextProvider } from '../context/UserContext.jsx'

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
      }}
    />
  </UserContextProvider>
)
