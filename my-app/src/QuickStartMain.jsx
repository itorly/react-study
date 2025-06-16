import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './Creating and nesting components.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)