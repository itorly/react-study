import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './1.Creating and nesting components/1.Creating and nesting components.jsx'
import AboutPage from './2.Writing markup with JSX/2.Writing markup with JSX.jsx'
import AddingStyles from './3.Adding styles/3.Adding styles.jsx'
import Profile from './4.Displaying data/Displaying data.jsx'
import ConditionalRendering from './5.Conditional rendering/Conditional rendering.jsx'
import RenderingLists from './6.Rendering lists/Rendering lists.jsx'
import RespondingToEvents from './7.Responding to events/Responding to events.jsx'
import UpdatingTheScreen from './8.Updating the screen/Updating the screen.jsx'
import SharingDataBetweenComponents from './10.Sharing data between components/Sharing data between components.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <AboutPage />
    <AddingStyles />
    <Profile />
    <ConditionalRendering />
    <RenderingLists />
    <RespondingToEvents />
    <UpdatingTheScreen />
    <SharingDataBetweenComponents />
  </StrictMode>,
)