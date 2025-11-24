import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
