import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QRCode } from './QRCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QRCode/>
  </StrictMode>,
)
