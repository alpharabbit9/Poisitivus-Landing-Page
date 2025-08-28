import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Sections/Banner';
import Footer from './Components/Footer/Footer';

import Services from './Sections/Services';
import SponsorPartner from './Sections/SponsorPartner';
import CaseStudiesSection from './Sections/CaseStudiesSetion';
import ContactUsSection from './Sections/ContactUsSection';
import WorkingProcessSection from './Sections/WorkingProcessSection';
import TeamSection from './Sections/TeamSection';
import TestimonialsSection from './Sections/TestimonialsSection';
import Proposal from './Sections/Proposal';

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
    <div className='bg-[#FFFFFF] min-h-screen text-[#191A23]  overflow-hidden'>

      <div className='w-11/12 mx-auto'>

        <header>

          <Navbar />

        </header>

        <main>

          <Banner />
          <SponsorPartner />
          <Services />
          <Proposal />
          <CaseStudiesSection />
          <WorkingProcessSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactUsSection />

        </main>
        <footer>

          <Footer />

        </footer>
      </div>





    </div>
  )
}

export default App
