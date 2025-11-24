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
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        autoResumeDelay={3000}
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
