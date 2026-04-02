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
import {  SKILLS, SKILL_LEVELS, PROJECTS, EXPERIENCES, NAV, NAV_IDS } from "./Data/Data.jsx"


// ---------------------------------------------------------------------------------
//                                    Fonction principal
// ---------------------------------------------------------------------------------

export default function App() {
  const [shooting, setShooting] = useState(false);

  return (
    <div className="relative min-h-screen text-[#d8d6e8] overflow-hidden">
      <StarsBackground />

      <Navbar nav={NAV} navIds={NAV_IDS} />

      {shooting && <ShootingStar onDone={() => setShooting(false)} />}

      <main className="relative z-10">
        <Hero onShoot={() => setShooting(true)} />
        <Skills skills={SKILLS} skill_lvl={SKILL_LEVELS} />
        <Projects project={PROJECTS} />
        <Experiences experiences={EXPERIENCES} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

