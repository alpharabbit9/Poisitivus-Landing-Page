import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Sections/Banner';
import Footer from './Components/Footer/Footer';

const App = () => {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })
  return (
    <div className='bg-[#F3F3F3] min-h-screen text-[#191A23]   overflow-hidden'>

      <div className='w-11/12 mx-auto'>

        <header>

          <Navbar />

        </header>

        <main>

          <Banner />

        </main>
        <footer>

          <Footer />

        </footer>
      </div>





    </div>
  )
}

export default App
