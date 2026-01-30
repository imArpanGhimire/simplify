"use client"

import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Login from './pages/Login';
import About from './pages/About';
import LearnMore from './components/LearnMore';
import Getstarted from './components/Getstarted';
import Footer from './components/Footer';
import Cards from './components/Cards';
import ReactLenis from 'lenis/react';
// import RealNewsLetter from './components/RealNewsletter';
import Contact from './pages/Contact';
function App() {



  const location = useLocation()
  const hideNavInLoginRoute = ['/Login', '/Getstarted']
  return (
    <>
      <ReactLenis root>
        <div className={`w-full min-h-screen ${hideNavInLoginRoute.includes(location.pathname) ? 'bg-black' : 'bg-linear-to-br from-slate-200 via-sky-100 to-teal-100 sm:px-[12vw] md:px-[15vw] p-5'}`}>
          {!hideNavInLoginRoute.includes(location.pathname) && <Nav />}

          <Routes>

            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/LearnMore' element={<LearnMore />} />
            <Route path='/Getstarted' element={<Getstarted />} />
            {/* <Route path='/RealNewsLetter' element={<RealNewsLetter />} /> */}
            <Route path='/footer' element={<Footer />} />
          </Routes>
          {!hideNavInLoginRoute.includes(location.pathname) && <Footer />}

        </div>
      </ReactLenis>
    </>
  )
}

export default App
