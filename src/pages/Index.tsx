import LiquidEther from '@/components/LiquidEther';
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
      <LiquidEther
        colors={['#222744', '#3c1868', '#4b0082']}
        mouseForce={15}
        cursorSize={80}
        isViscous={false}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={1.8}
        autoResumeDelay={4000}
      />
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
