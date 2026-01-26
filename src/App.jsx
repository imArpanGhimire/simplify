"use client"

import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Login from './pages/Login';
import About from './pages/About';
import LearnMore from './components/LearnMore';
import Getstarted from './components/Getstarted';
import Footer from './components/Footer';
import Cards from './components/Cards';
import ReactLenis from 'lenis/react';
import Queries from './components/Queries';
function App() {

  return (
    <>
      <ReactLenis root>
        <div className=' bg-linear-to-br from-slate-200 via-sky-100 to-teal-100   w-full min-h-screen sm:px-[12vw] md:px-[15vw] p-5'>
          <Nav />
          <Routes>

            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/LearnMore' element={<LearnMore />} />
            <Route path='/Getstarted' element={<Getstarted />} />
            <Route path='/queries' element={<Queries />} />
          </Routes>
          {/* <About /> */}

          {/* <Footer /> */}
        </div>
      </ReactLenis>
    </>
  )
}

export default App
