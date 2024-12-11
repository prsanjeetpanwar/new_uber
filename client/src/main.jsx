import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import UserContext, { UserDataContext } from './context/user.context.jsx'
import CaptainContext from './context/captain.context.jsx'

// eslint-disable-next-line no-undef
createRoot(document.getElementById('root')).render(
 
    <CaptainContext>
    <UserContext>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    </UserContext>
    </CaptainContext>
   

)
