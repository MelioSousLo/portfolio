// ---------------------------------------------------------------------------------
//                                    Imports
// ---------------------------------------------------------------------------------

import { useState } from "react";
import Contact from "./Components/Contact"
import Experiences from "./Components/Experience.jsx"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import ShootingStar from "./Components/ShootingStar"
import StarsBackground from "./Components/StarsBackground"
import About from "./Components/About.jsx"
import {  SKILLS, SKILL_LEVELS, PROJECTS, EXPERIENCES, NAV_IDS } from "./Data.jsx";



// ---------------------------------------------------------------------------------
//                                    Fonction principal
// ---------------------------------------------------------------------------------

export default function App() {
  const [shooting, setShooting] = useState(false);

  return (
    <div className="relative min-h-screen text-[#d8d6e8] overflow-hidden">
      <StarsBackground />

      <Navbar navIds={NAV_IDS} />

      {shooting && <ShootingStar onDone={() => setShooting(false)} />}

      <main className="relative z-10">
        <Hero onShoot={() => setShooting(true)} />
        <About />
        <div className="bg-black/50">
          <Skills skills={SKILLS} skill_lvl={SKILL_LEVELS} />
          <Projects project={PROJECTS} />
        </div>
        <Experiences experiences={EXPERIENCES} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

