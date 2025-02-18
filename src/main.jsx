import { createRoot } from 'react-dom/client'
import './index.css'
import  {GifExpertApp} from './GifExpertApp.jsx'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < GifExpertApp />
  </StrictMode>
)
