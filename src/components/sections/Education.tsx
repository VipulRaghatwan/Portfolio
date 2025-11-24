import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.education-title', {
        scrollTrigger: {
          trigger: '.education-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from('.education-item', {
        scrollTrigger: {
          trigger: '.education-item',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      institution: 'Vidyalankar Institute of Technology Mumbai',
      status: 'Pursuing',
      description: 'Bachelor of Engineering in Computer Science',
    },
    {
      institution: "VPM's Polytechnic Thane",
      status: 'Completed',
      description: 'Diploma in Computer Engineering',
    },
    {
      institution: 'DAV Public School Thane',
      status: 'Completed',
      description: 'Secondary Education',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="education-title text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Background</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-item flex gap-6 items-start bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-muted-foreground mb-2">{edu.description}</p>
                <span className="inline-block text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
