import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <img src="/images/avatar.png" alt="Profile" className="w-32 h-32" />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}