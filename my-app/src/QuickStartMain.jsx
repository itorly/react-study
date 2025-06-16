import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './Creating and nesting components.jsx'
import AboutPage from './Writing markup with JSX.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <AboutPage />
  </StrictMode>,
)