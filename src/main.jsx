import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QRCode } from './QRCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QRCode/>
  </StrictMode>,
)
