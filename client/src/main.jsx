
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
