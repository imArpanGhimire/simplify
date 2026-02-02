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
import Privacy from './components/Privacy'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {
  const location = useLocation()
  const { isDark } = useTheme()

  const hideNavRoutes = ['/Login', '/Getstarted', '/TermsAndConditions', '/Privacy']
  const hideFooterRoutes = ['/Login', '/Getstarted']
  const hideNav = hideNavRoutes.includes(location.pathname)
  const hideFooter = hideFooterRoutes.includes(location.pathname)

  return (
    <ReactLenis root>
      <div
        className={`w-full min-h-screen transition-colors duration-300 ${hideNav || hideFooter
            ? 'bg-black'
            : isDark
              ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-5'
              : 'bg-gradient-to-br from-slate-200 via-sky-100 to-teal-100 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-5'
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App