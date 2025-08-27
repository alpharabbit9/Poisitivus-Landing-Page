import React, { useEffect } from 'react'
import Lenis from 'lenis'

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

      <header>
        hlw
      </header>
      <main></main>
      <footer></footer>


     
     
      
    </div>
  )
}

export default App
