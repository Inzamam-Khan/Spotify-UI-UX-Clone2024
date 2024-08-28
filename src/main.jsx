import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { PageLayout } from './Components/PageLayout.jsx'
import { PlayerContextProvider } from './Context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(

    

    <BrowserRouter>
    
    <PlayerContextProvider>
        <PageLayout>
        <App />
        </PageLayout>
    </PlayerContextProvider>  
    </BrowserRouter>
      

    
  
)
