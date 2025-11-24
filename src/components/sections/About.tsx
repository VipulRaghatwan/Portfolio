import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Rocket, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable, and efficient code is not just a practice—it\'s a philosophy.',
    },
    {
      icon: Rocket,
      title: 'Continuous Learner',
      description: 'Embracing new technologies and frameworks to stay ahead in the ever-evolving tech landscape.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering solutions that meet business objectives and exceed user expectations.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="about-content">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate web developer with a deep commitment to technology and innovation. 
              My journey in software engineering began with a curiosity about how things work on the web, 
              and has evolved into a dedicated pursuit of creating impactful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my education at Vidyalankar Institute of Technology Mumbai, I combine 
              academic knowledge with practical experience to build full-stack applications that solve 
              real-world problems. My approach is rooted in understanding user needs, writing clean code, 
              and leveraging modern technologies to create seamless, performant web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="about-content bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors duration-300 group"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
