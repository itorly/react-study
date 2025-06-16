import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './1.Creating and nesting components/1.Creating and nesting components.jsx'
import AboutPage from './2.Writing markup with JSX/2.Writing markup with JSX.jsx'
import AddingStyles from './3.Adding styles/3.Adding styles.jsx'
import Profile from './4.Displaying data/Displaying data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <AboutPage />
    <AddingStyles />
    <Profile />
  </StrictMode>,
)