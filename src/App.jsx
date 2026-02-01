"use client"
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './pages/Landing'
import Login from './pages/Login'
import About from './pages/About'
import LearnMore from './components/LearnMore'
import Getstarted from './components/Getstarted'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'
import Contact from './pages/Contact'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/Privacy'
import Privacy from './components/Privacy'

function App() {
  const location = useLocation()

  const hideNavRoutes = ['/Login', '/Getstarted', '/TermsAndConditions', '/Privacy']
  const hideFooterRoutes = ['/Login', '/Getstarted']

  const hideNav = hideNavRoutes.includes(location.pathname)
  const hideFooter = hideFooterRoutes.includes(location.pathname)

  return (
    <ReactLenis root>
      <div
        className={`w-full min-h-screen ${hideNav || hideFooter
          ? 'bg-black'
          : 'bg-linear-to-br from-slate-200 via-sky-100 to-teal-100 sm:px-[12vw] md:px-[15vw] p-5'
          }`}
      >
        {!hideNav && <Nav />}

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/LearnMore' element={<LearnMore />} />
          <Route path='/Getstarted' element={<Getstarted />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/Privacy' element={<Privacy />} />
        </Routes>

        {!hideFooter && <Footer />}
      </div>
    </ReactLenis>
  )
}

export default App
