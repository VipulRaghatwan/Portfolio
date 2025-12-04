import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experience-title', {
        scrollTrigger: {
          trigger: '.experience-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.utils.toArray('.experience-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experience = [
  {
    company: 'Go Green Technologies (SPIT College, Andheri)',
    role: 'IOT Intern',
    duration: '2 Months',
    description: [
      'Worked on IoT-based systems involving sensors, microcontrollers, and real-time data monitoring.',
      'Assisted in developing and testing embedded solutions using Arduino and ESP32.',
      'Implemented data collection, device communication, and automation workflows.',
      'Contributed to hardware setup, circuit debugging, and improving device performance.',
      'Collaborated with the team to integrate IoT data with dashboards, APIs, and cloud services.',
    ],
  },
];


  return (
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="experience-title text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="experience-item flex gap-6 items-start bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-white" size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>

                <h4 className="text-white/80 mb-2">{exp.company}</h4>

                <ul className="text-white/90 mb-2 list-disc list-inside space-y-1">
  {exp.description.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>


                <span className="inline-block text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
