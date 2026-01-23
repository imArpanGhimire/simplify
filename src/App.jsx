import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Login from './pages/Login';
import About from './pages/About';
import LearnMore from './components/LearnMore';
import Getstarted from './components/Getstarted';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div className=' bg-linear-to-br from-slate-200 via-sky-100 to-teal-100   w-full min-h-screen sm:px-[12vw] md:px-[15vw] p-5'>
        <Nav />
        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/LearnMore' element={<LearnMore />} />
          <Route path='/Getstarted' element={<Getstarted />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
