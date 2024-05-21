import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstSight from './components/FirstSight'
import Information from './components/Information'
import AI_Integration from './components/AI_Integration'
import Sections from './components/Sections'
import Community from './components/Community';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <FirstSight />
      <Information />
      <AI_Integration />
      <Sections />
      <Community />
      <Footer />
    </>
  )
}

export default App
